'use server';

import { CartItem } from "@/app/(store)/store";
import { imageUrl } from "@/lib/imageUrl";
import stripe from "@/lib/stripe";

export type Metadata = {
    orderNumber: string;
    customerName: string;
    customerEmail: string;
    clerkUserId: string;
};

export type GroupedCartItem = {
    product: CartItem["product"];
    quantity: number;
};



export async function createCheckoutSession(
    items: GroupedCartItem[],
    metadata: Metadata
) {
    try {
        const itemWithoutPrice = items.find((item) => !item.product.price);

        if (itemWithoutPrice) {
            throw new Error(`Product ${itemWithoutPrice.product._id} does not have a price`);
        }

        // Search for existing customer by email
        const customers = await stripe.customers.list({
            email: metadata.customerEmail,
            limit: 1,
        });

        let customerId: string | undefined;

        if (customers.data.length > 0) {
            customerId = customers.data[0].id;
        }

        const baseUrl = process.env.NODE_ENV === "production"
            ? `https://${process.env.VERCEL_URL}` : `${process.env.NEXT_PUBLIC_BASE_URL}`;

        const successUrl = `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}&orderNumber=${metadata.orderNumber}`;
        const cancelUrl = `${baseUrl}/cart`;

        const session = await stripe.checkout.sessions.create({
            customer: customerId,
            customer_creation: customerId ? undefined : 'always',
            customer_email: !customerId ? metadata.customerEmail : undefined,
            metadata,
            mode: "payment",
            allow_promotion_codes: true,
            success_url: successUrl,
            cancel_url: cancelUrl,


            line_items: items.map((item) => ({
                price_data: {
                    currency: "bdt",
                    product_data: {
                        name: item.product.name || "unnamed product",
                        description: `Product ID: ${item.product._id}`,
                        metadata: {
                            id: item.product._id,
                        },
                        images: item.product.image
                            ? [imageUrl(item.product.image).url()] : undefined,

                    },

                    unit_amount: item.product.price ? Math.round(item.product.price * 100) : 0,

                },
                quantity: item.quantity,

            })),

        });


        return session.url;

    } catch (error) {
        console.error("Error creating checkout session", error);
        throw error;

    }
}