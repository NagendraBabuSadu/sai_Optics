'use client';

import * as React from "react";

import { Product } from "../types/products";
import productsData from "@/app/data/productsData.json";

export interface ProductContextType {
  products: Product[];
  categories: string[];
}

export interface ProductsProviderProps {
  children: React.ReactNode;
}

export const ProductsContext = React.createContext<
  ProductContextType | undefined
>(undefined);

export const ProductsProvider: React.FC<ProductsProviderProps> = ({
  children,
}) => {
  const [products] = React.useState(productsData.products);
  const [categories] = React.useState(productsData.categories);

  return (
    <ProductsContext.Provider value={{ products, categories }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = React.useContext(ProductsContext);
  if (context === undefined) {
    throw new Error("useProducts must be within a ProductsProvider");
  }

  return context;
};
