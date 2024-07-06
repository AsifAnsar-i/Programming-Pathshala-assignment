import React from "react";
import { Button } from "./ui/button";

const LearnMore = () => {
  return <div className="w-full h-[500px] ">
      <div className="flex items-center gap-[16px] py-16 justify-evenly">
        <img src="/assets/learnMore.svg" alt="learn more" className="w-[441px] h-[328px]" />
        <div className="flex flex-col gap-[25px] w-[600px]">
              <p className="font-semibold text-[36px]  text-start text-[#4D4D4D] leading-[44px] ">The unseen of spending three years at Pixelgrade</p>
              <p className="font-normal text-[#18191F] text-start  text-xs leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
              <Button variant={"ghost"} className="items-start w-[150px] bg-[#4CAF4F]">Learn More</Button>
        </div>
      </div>
  </div>;
};

export default LearnMore;
