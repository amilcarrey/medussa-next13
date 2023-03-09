'use client'
import { medusa } from "@lib/config";
import { Product } from "@medusajs/medusa";
import Image from "next/image";
import ProductPreview from "./ProductPreview";

const addToCart = async (variant_id: string) => {
  medusa.carts.lineItems.create(localStorage.getItem("cart_id")!, {
    variant_id,
    quantity: 1,
  });
};

export const ProductTemplate = ({ product }: { product: Product }) => {
  return (
    <div >
      <ProductPreview id={product.id} title={product.title} handle={product.handle} thumbnail={product.thumbnail}/>
      <pre className="text-xs">{JSON.stringify(product.variants,null,2)}</pre>
      <button
        onClick={() => addToCart(product.variants[0].id)}
        className="bg-black text-white"
      >
        Add To Cart
      </button>
    </div>
  );
};
