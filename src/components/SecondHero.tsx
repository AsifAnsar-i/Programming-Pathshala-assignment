import React from "react";
import { Button } from "./ui/button";

const SecondHero = () => {
  return (
    <div className="w-full h-auto bg-[#F5F7FA] py-10 lg:py-14">
      <div className="flex flex-col lg:flex-row items-center justify-around px-6 lg:px-14">
        <img
          src="/assets/secondHero.svg"
          alt="hero"
          className="w-full lg:w-[441px] h-auto lg:h-[400px] mb-6 lg:mb-0"
        />
        <div className="flex flex-col gap-6 lg:gap-1 max-w-full lg:max-w-[600px]">
          <p className="font-semibold text-2xl lg:text-3xl text-[#4D4D4D] leading-tight text-center lg:text-start">
            How to design your site footer like we did
          </p>
          <p className="font-normal text-[#18191F] text-xs lg:text-sm leading-6 text-center lg:text-start">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at
            scelerisque elit erat a magna. Donec quis erat at libero ultrices
            mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui,
            at porta nisi facilisis finibus. In euismod augue vitae nisi
            ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
            commodo faucibus efficitur quis massa. Praesent felis est, finibus
            et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
            ipsum id gravida.
          </p>
          <Button variant="ghost" className="items-start w-[150px] bg-[#4CAF4F]">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SecondHero;
