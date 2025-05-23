export interface Product{
    id: string;
    name: string;
    brand: string;
    category: string;
    price: number;
    discountPrice: number;
    color: string;
    frameType: string;
    frameShape: string;
    image: string;
    stock: number;
    ratings: number;
  }

  export interface ProductsData {
    categories: string[],
    products: Product[]
  }

  