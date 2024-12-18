import React from "react";
import Link from "next/link";
import useCartInfo from "@/hooks/use-cart-info";
import { useState } from "react";

const CartCheckout = () => {
  const { total } = useCartInfo();

  return (
    <div className="tp-cart-checkout-wrapper">
      <div className="tp-cart-checkout-total d-flex align-items-center justify-content-between">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className="tp-cart-checkout-proceed">
        <Link href="/checkout" className="tp-cart-checkout-btn w-100">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartCheckout;
