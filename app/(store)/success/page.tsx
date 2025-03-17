"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import useCartStore from "../store";

function SuccessPage() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [orderNumber, clearCart]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-12 rounded-xl shadow-lg max-w-2xl w-full mx-4">
        <div className="flex justify-center mb-8">
          <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 h-20 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Thank You for Your Order!
        </h1>
        <div className="border-t border-b border-gray-200 py-6 mb-6">
          <p className="text-lg text-gray-700 mb-4 text-center">
            Your order has been placed successfully and is being processed.
          </p>
          <div className="space-y-2">
            {orderNumber && (
              <p className="flex items-center space-x-5 text-gray-700 mb-4 text-center">
                <span>Order Number:</span>
                <span className="font-mono text-sm text-green-600">
                  {orderNumber}
                </span>
              </p>
            )}
          </div>
        </div>
        <p className="text-lg text-gray-700 mb-6 text-center">
          We will send you an email with your order details shortly.
        </p>

        <div className="mt-6 space-x-4 flex flex-col items-center lg:flex-row lg:justify-center">
          <a
            href="/orders"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          >
            View Order Details
          </a>
          <a
            href="/shop"
            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
