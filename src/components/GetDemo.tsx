import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

const GetDemo = () => {
  return (
    <div className="w-full py-4 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-8 py-16">
          <p className="font-semibold text-4xl md:text-5xl lg:text-6xl text-center leading-[1.2]">
            Pellentesque suscipit fringilla libero eu.
          </p>
          <Button variant="default" className="bg-[#4CAF4F] w-[178px]">
            <span className="text-white mr-2">Get a Demo</span>{" "}
            <MoveRight className="text-white" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GetDemo;
