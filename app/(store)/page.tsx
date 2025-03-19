// import { Button } from "@/components/ui/button";

import ProductsView from "@/components/ProductsView";
import SuperSaleBanner from "@/components/SuperSaleBanner";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export const dynamic = "force-static";
export const revalidate = 60;
export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  console.log(
    crypto.randomUUID().slice(0, 5) +
      `>>> Rerendered the home page caches for ${products.length} products and ${categories.length} categories`
  );
  return (
    <div>
      <SuperSaleBanner />
      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
        {/* render all products */}
        <ProductsView products={products} categories={categories} />
      </div>
    </div>
  );
}
