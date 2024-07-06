import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="w-full h-[599px] bg-[#F5F7FA] flex flex-col mx-auto">
      <div className="flex items-center p-20  justify-around">
        <div className="flex flex-col gap-[25px] max-w-[657px]">
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-64px text-5xl leading-76px">
              Lessons and insights
            </p>
            <p className="font-semibold text-64px leading-76px text-5xl text-[#4CAF4F]">
              from 8 years
            </p>
          </div>
          <p className="text-[#717171] font-normal text-base leading-6">
            Where to grow your business as a photographer: site or social media?
          </p>
          <Button
            variant="outline"
            className="bg-[#4CAF4F] w-[128px] h-[52px] text-white"
          >
            Register
          </Button>
        </div>
        <img
          src="/assets/hero.svg"
          alt="hero"
          className="w-[391px] h-[407px]"
        />
      </div>
      <div className="w-full mx-auto">
        <div className="flex-1 flex gap-[8px] justify-center">
          <div className="h-[10px] w-[10px] rounded-full bg-[#4CAF4F]" />
          <div className="h-[10px] w-[10px] rounded-full bg-[#b7d4bb]" />
          <div className="h-[10px] w-[10px] rounded-full bg-[#b7d4bb]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
