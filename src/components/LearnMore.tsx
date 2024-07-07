import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const LearnMore = () => {
  return (
    <div className="w-full h-auto py-16">
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-evenly lg:items-start">
        <Image
          src="/assets/learnMore.svg"
          alt="learn more"
          className="w-full max-w-[441px] h-auto lg:w-[441px] lg:h-[328px]"
        />
        <div className="flex flex-col gap-6 max-w-full lg:max-w-[600px]">
          <p className="font-semibold text-3xl px-4 md:mx-4 lg:mx-4  sm:px-0 sm:text-4xl lg:text-5xl text-[#4D4D4D] leading-tight">
            The unseen of spending three years at Pixelgrade
          </p>
          <p className="font-normal text-[#18191F] text-sm px-4 md:px-4 lg:px-4 sm:px-0 sm:text-base lg:text-lg leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <Button
            variant={"ghost"}
            className="items-start mx-4 md:mx-4 lg:mx-4  sm:mx-0  w-[150px] lg:w-auto bg-[#4CAF4F]"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
