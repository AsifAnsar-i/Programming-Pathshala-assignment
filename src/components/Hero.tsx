import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="w-full h-auto bg-[#F5F7FA] flex flex-col items-center mx-auto py-10 lg:py-20">
      <div className="flex flex-col items-center px-5 lg:flex-row lg:justify-between lg:items-start lg:px-20">
        <div className="flex flex-col gap-6 max-w-full lg:gap-8 lg:max-w-[657px] text-center lg:text-left">
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight lg:leading-[76px]">
              Lessons and insights
            </p>
            <p className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight lg:leading-[76px] text-[#4CAF4F]">
              from 8 years
            </p>
          </div>
          <p className="text-[#717171] font-normal text-base sm:text-lg leading-6 lg:text-xl lg:leading-7">
            Where to grow your business as a photographer: site or social media?
          </p>
          <Button
            variant="outline"
            className="bg-[#4CAF4F] w-full sm:w-auto lg:w-[128px] h-[52px] text-white mx-auto lg:mx-0"
          >
            Register
          </Button>
        </div>
        <img
          src="/assets/hero.svg"
          alt="hero"
          className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[391px] h-auto mt-6 lg:mt-0"
        />
      </div>
      <div className="w-full mx-auto mt-6">
        <div className="flex gap-2 justify-center">
          <div className="h-[10px] w-[10px] rounded-full bg-[#4CAF4F]" />
          <div className="h-[10px] w-[10px] rounded-full bg-[#b7d4bb]" />
          <div className="h-[10px] w-[10px] rounded-full bg-[#b7d4bb]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
