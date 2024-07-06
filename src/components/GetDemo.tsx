import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

const GetDemo = () => {
  return (
    <div className="w-full h-[300px]  bg-[#F5F7FA] py-4">
      <div className="flex flex-col gap-[32px] items-center mx-auto max-w-[887px]  ">
        <p className="font-semibold text-[64px] leading-[76px] text-center">
          Pellentesque suscipit fringilla libero eu.
        </p>
        <Button variant={"default"} className="bg-[#4CAF4F] w-[178px]">
          <span className="text-white mr-2">Get a Demo</span>{" "}
          <MoveRight className="text-white" size={16} />
        </Button>
      </div>
    </div>
  );
};

export default GetDemo;
