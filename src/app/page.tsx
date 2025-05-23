"use client";

import React from "react";
import App from "./App";
import PageWrapper from "@/components/PageWrapper";
import { ProductsProvider } from "./context/productsContext";

export default function Home() {
  return (
    <div className="grid min-h-screen">
      <main className="flex flex-col gap-[32px] items-center justify-center">
        <h1>Hello, this is a test!</h1>;
        {/* <PageWrapper>
          <ProductsProvider>
            <App />
          </ProductsProvider>
        </PageWrapper> */}
      </main>
    </div>
  );
}
