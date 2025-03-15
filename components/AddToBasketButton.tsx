"use client";

import useBasketStore from "@/app/(store)/store";
import { Product } from "@/sanity.types";
import { useEffect, useState } from "react";

interface AddToBasketButtonProps {
  product: Product;
  disabled: boolean;
}

function AddToBasketButton({ product, disabled }: AddToBasketButtonProps) {
  const { addItem, removeItem, getItemCount } = useBasketStore();

  const [isClient, setIsClient] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    setIsClient(true);
    setItemCount(getItemCount(product._id));
  }, [getItemCount, product._id]);

  const handleAddItem = () => {
    addItem(product);
    setItemCount((prev) => prev + 1);
  };

  const handleRemoveItem = () => {
    if (itemCount > 0) {
      removeItem(product._id);
      setItemCount((prev) => prev - 1);
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex items-center justify-center space-x-3 mb-12">
      {/* Decrement Button */}
      <button
        onClick={handleRemoveItem}
        className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200 ${
          itemCount === 0
            ? "bg-gray-100 cursor-not-allowed"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
        disabled={itemCount === 0}
      >
        <span
          className={`text-xl font-bold ${itemCount === 0 ? "text-gray-300" : "text-gray-600 mb-1"}`}
        >
          -
        </span>
      </button>

      {/* Item Count */}
      <span className="w-10 text-center text-md font-semibold">
        {itemCount}
      </span>

      {/* Increment Button */}
      <button
        onClick={handleAddItem}
        className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200 ${
          disabled
            ? "bg-gray-100 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
        disabled={disabled}
      >
        <span className="text-xl font-bold text-white mb-1">+</span>
      </button>
    </div>
  );
}

export default AddToBasketButton;
