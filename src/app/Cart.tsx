"use client";

import { medusa } from "@lib/config";
import { Cart } from "@medusajs/medusa";
import { useEffect, useMemo, useState } from "react";
import ProductPreview from "./ProductPreview";

// needs to be client, if not, has no access to cart id stores

export default function CartTemplate() {
  const [cart, setCart] =
    useState<Omit<Cart, "refunded_total" | "refundable_amount">>();
  useEffect(() => {
    const id = localStorage.getItem("cart_id");

    if (!id) {
      medusa.carts.create().then(({ cart }) => {
        setCart(cart);
        localStorage.setItem("cart_id", cart.id);
      });
    }
    if (id) {
      medusa.carts.retrieve(id).then(({ cart }) => setCart(cart));
    }
  }, []);

  return (
    <div>
      Cart
      {/* HAS NO HANDLE? */}
      {cart?.items.map((product) => (
        <ProductPreview
          id={product.id}
          title={product.title}
          handle={"hoodie"}
          thumbnail={product.thumbnail}
        />
      ))}
    </div>
  );
}
