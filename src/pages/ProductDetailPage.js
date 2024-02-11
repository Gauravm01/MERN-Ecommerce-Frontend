import React from "react";
import ProductDetails from "../features/products/components/ProductDetails";
import Navbar from "../features/navbar/Navbar";

export default function ProductDetailPage() {
  return (
    <div>
      <Navbar>
        <ProductDetails></ProductDetails>
      </Navbar>
    </div>
  );
}
