import Image from "next/image";
import * as React from "react";

import sq1 from "../../../public/gridImages/sq1.jpg";
import sq2 from "../../../public/gridImages/sq2.jpg";
import sq3 from "../../../public/gridImages/sq3.jpg";
import sq4 from "../../../public/gridImages/sq4.jpg";
import sq5 from "../../../public/gridImages/sq5.jpg";
import Link from "next/link";

const GridImages: React.FunctionComponent = () => {
  return (
    <>
      <h1 className="text-center text-3xl md:text-5xl pt-4 mt-4 font-bold ">
        FIND THE PERFECT FIT
      </h1>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        <Link href="/category/eye-glasses">
          <Image
            src={sq1}
            alt="Image 1"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </Link>
        <div>
          <Link href="/category/computer-glasses">
            <Image
              src={sq2}
              alt="Image 2"
              className="rounded-lg shadow-md w-full h-auto"
              style={{ marginBottom: "10px" }}
            />
          </Link>
          <Link href="/category/sun-glasses">
            <Image
              src={sq3}
              alt="Image 3"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </Link>
        </div>
        <Link href="/category/eye-glasses">
          <Image
            src={sq4}
            alt="Image 4"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </Link>
        <Link href="/category/kids-glasses">
          <Image
            src={sq5}
            alt="Image 5"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </Link>
      </div>
    </>
  );
};

export default GridImages;
