"use client";

import type { components } from "@/lib/backend/apiV1/schema";
import { useState, useEffect } from "react";
import { apiFetch } from "@/lib/backend/client";

type ProductDto = components['schemas']['ProductDto'];

export default function Page() {
  const [products, setProducts] = useState<ProductDto[] | null>(null);

  useEffect(() => {
    apiFetch('/api/v1/products').then(setProducts);
  }, []);

  if (products === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      {products.length === 0 && <p>No products</p>}
      
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
