"use client";

import * as React from "react";
import { use } from "react"; // <-- Important
import { Product } from "@/app/types/products";
import productsData from "@/app/data/productsData.json";
import Image from "next/image";
import Link from "next/link";

export default function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const products: Product[] = productsData.products;

  console.log("slug, ", slug);

  const label = slug
    ?.split("-")
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
              <Link
                key={item.id}
                className="relative"
                target="_blank"
                href={item.image!}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  className="h-70 w-full rounded-xl object-contain shadow-blue-500/10 "
                  width="1080"
                  height={1000}
                />
              </Link>
              <p className="mt-2 font-semibold text-center">{item.name}</p>
              <p className="text-sm text-gray-500">₹{item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
