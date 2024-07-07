import Image from "next/image";
import React from "react";

const brand = [
  "/assets/brands/1.svg",
  "/assets/brands/2.svg",
  "/assets/brands/3.svg",
  "/assets/brands/4.svg",
  "/assets/brands/5.svg",
  "/assets/brands/6.svg",
  "/assets/brands/7.svg",
];

const Brand = () => {
  return (
    <div className="w-full h-auto py-6">
      <div className="flex flex-col gap-4 sm:gap-6 py-6">
        <div className="flex flex-col gap-2 text-center">
          <p className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#4D4D4D] leading-tight lg:leading-[44px]">
            Our Clients
          </p>
          <p className="font-normal text-[#18191F] text-xs sm:text-sm lg:text-base leading-5 sm:leading-6 lg:leading-7">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-10 lg:px-20 py-5">
          {brand.map((item, index) => (
            <Image
              src={item}
              alt="brand"
              className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
