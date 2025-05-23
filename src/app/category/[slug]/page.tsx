"use client";

import * as React from "react";
import { Product } from "@/app/types/products";
import productsData from "@/app/data/productsData.json";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const products: Product[] = productsData.products;

  console.log("slug, ", slug);

  const label = slug
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ")!;

  console.log("label", label);
  const list = products.filter(
    (p) => p.category.toLowerCase() === label.toLowerCase()
  );
  console.log("list", list);

  const itemDetails = (product: Product) => {
    console.log("e", product);
  };
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">{label}</h1>

      {list.length === 0 ? (
        <p>No items yet.</p>
      ) : (
        <ul className="grid gap-6 md:grid-cols-3 max-w-7xl mx-auto">
          {list.map((item) => (
            <li
              key={item.id}
              className="border border-transparent  rounded-lg p-2 flex flex-col items-center transition-shadow duration-300 hover:shadow-lg"
              onClick={() => itemDetails(item)}
              style={{
                boxShadow: "0 0 0 1px",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 10px rgba(59, 130, 246, 0.5)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "0 0 0 1px")
              }
            >
              <a
                key={item.id}
                className="relative"
                target="_target"
                href={item.image!}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-70 w-full rounded-xl object-contain shadow-blue-500/10 "
                />
              </a>
              <p className="mt-2 font-semibold text-center">{item.name}</p>
              <p className="text-sm text-gray-500">₹{item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
