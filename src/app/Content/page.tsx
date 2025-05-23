import * as React from "react";
import { useProducts } from "../context/productsContext";
import eyeTestImage from "../../../public/eyeTest.jpg";
import Image from "next/image";


interface IContentProps {}

const Content: React.FunctionComponent<IContentProps> = (props) => {
  const { categories, products } = useProducts();
  console.log("categories: ", categories);
  console.log("products: ", products);
  return (
    <div className="relative rounded-lg h-[300px] md:h-[768px] flex flex-col items-center justify-center text-center p-6 mt-3 ">
      <h1 className="text-3xl md:text-5xl font-bold uppercase mt-3 p-2">
        Free Eye Test at Our Store
      </h1>
      <p className="mt-2 text-base md:text-lg text-gray-600 max-w-2xl pb-2">
        No Fees, Just Focus – Visit Us for a Free Eye Test!
      </p>
      <div className="relative m-7">
        <Image src={eyeTestImage} alt="" width={1000} />
      </div>
      <hr />
     
    </div>
  );
};

export default Content;
