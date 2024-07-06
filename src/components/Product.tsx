import { MoveRight } from "lucide-react";
import React from "react";

const Product = () => {
  return (
    <div className="w-full h-[390px] bg-[#F5F7FA]">
      <div className="flex items-center justify-around py-7 px-14 ">
        <img
          src="/assets/proimg.jpg"
          alt="hero"
          className="w-[326px] h-[326px] rounded-[8px]"
        />
        <div className="flex flex-col gap-[20px] h-[326px] w-[748px]">
          <p className="ont-normal text-[#18191F] text-start  text-xs leading-6">
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
          <p className="font-normal text-[#4CAF4F] text-start  text-base leading-6">
            Tim Smith
          </p>
          <p className="font-normal text-[#18191F] text-[14px] text-start  text-base leading-6">
            British Dragon Boat Racing Association
          </p>
          <div className="flex items-center gap-[32px]">
            <img
              src="/assets/product/1.svg"
              alt="arrow"
              className="w-[48px] h-[48px]"
            />
            <img
              src="/assets/product/2.svg"
              alt="arrow"
              className="w-[48px] h-[48px]"
            />
            <img
              src="/assets/product/3.svg"
              alt="arrow"
              className="w-[48px] h-[48px]"
            />
            <img
              src="/assets/product/4.svg"
              alt="arrow"
              className="w-[48px] h-[48px]"
            />
            <img
              src="/assets/product/5.svg"
              alt="arrow"
              className="w-[48px] h-[48px]"
            />
            <img
              src="/assets/product/6.svg"
              alt="arrow"
              className="w-[48px] h-[48px]"
            />
            <div className="flex items-center gap-1">
              <span className="font-normal text-[#4CAF4F] text-start  text-sm leading-6">
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
