import React from "react";
import { MoveRight } from "lucide-react";

interface ProductProps {
  // Define props if any
}

const Product: React.FC<ProductProps> = () => {
  return (
    <div className="w-full bg-[#F5F7FA] py-7 px-4 lg:px-14">
      <div className="flex flex-col lg:flex-row items-center justify-around">
        <img
          src="/assets/proimg.jpg"
          alt="hero"
          className="w-full lg:w-[326px] h-[326px] rounded-[8px] mb-6 lg:mb-0 lg:mr-10"
        />
        <div className="flex flex-col gap-6 max-w-full lg:max-w-[600px]">
          <p className="font-normal text-[#18191F] text-xs lg:text-base leading-6">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <p className="font-normal text-[#4CAF4F] text-base leading-6">
            Tim Smith
          </p>
          <p className="font-normal text-[#18191F] text-[14px] text-base leading-6">
            British Dragon Boat Racing Association
          </p>
          <div className="sm:flex grid grid-cols-2 items-center gap-2 lg:gap-6">
            <img
              src="/assets/product/1.svg"
              alt="arrow"
              className="w-[36px] h-[36px]"
            />
            <img
              src="/assets/product/2.svg"
              alt="arrow"
              className="w-[36px] h-[36px]"
            />
            <img
              src="/assets/product/3.svg"
              alt="arrow"
              className="w-[36px] h-[36px]"
            />
            <img
              src="/assets/product/4.svg"
              alt="arrow"
              className="w-[36px] h-[36px]"
            />
            <img
              src="/assets/product/5.svg"
              alt="arrow"
              className="w-[36px] h-[36px]"
            />
            <img
              src="/assets/product/6.svg"
              alt="arrow"
              className="w-[36px] h-[36px]"
            />
            <div className="flex items-center gap-1">
              <span className="font-normal text-[#4CAF4F] text-sm leading-6">
                Meet all customers
              </span>
              <MoveRight size={24} className="text-[#4CAF4F]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
