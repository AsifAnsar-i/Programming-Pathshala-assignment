import React from "react";
import { Button } from "./ui/button";

const SecondHero = () => {
  return <div className="w-full h-[450px]">
        <div className="flex items-center justify-around py-7 px-20 ">
            <img src="/assets/secondHero.svg" alt="hero" className="w-[441px] h-[400px]"/>
            <div className="flex flex-col gap-[25px] w-[600px]">
              <p className="font-semibold text-[36px]  text-start text-[#4D4D4D] leading-[44px] ">How to design your site footer like we did</p>
              <p className="font-normal text-[#18191F] text-start  text-xs leading-6">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
              <Button variant={"ghost"} className="items-start w-[150px] bg-[#4CAF4F]">Learn More</Button>
        </div>
        </div>
  </div>;
};

export default SecondHero;
