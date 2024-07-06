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
    <div className="w-full h-[250px]">
      <div className="flex flex-col gap-[16px] py-6">
        <div className="flex flex-col gap-[8px]">
          <p className="font-semibold text-[36px]  text-[#4D4D4D] leading-[44px] text-center">
            Our Clients
          </p>
          <p className="font-normal text-[#18191F]  text-sm leading-6 text-center">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="flex  items-center justify-around px-20 py-5">
          {brand.map((item, index) => (
            <img
              src={item}
              alt="brand"
              className="w-[48px] h-[48px]"
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
