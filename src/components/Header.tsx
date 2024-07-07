import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <div className="w-full h-[84px] bg-[#F5F7FA] mx-auto">
      <div className="py-6 flex items-center px-5 lg:px-0  justify-between lg:justify-around">
        <img
          src="/assets/logo.svg"
          alt="logo"
          className="w-[154.49px] h-[24px]"
        />
        <div className="hidden lg:flex items-center gap-[50px] text-center">
          <span className="font-medium text-base leading-6 ">Home</span>
          <span className="font-normal text-base leading-6">Service</span>
          <span className="font-normal text-base leading-6">Feature</span>
          <span className="font-normal text-base leading-6">Product</span>
          <span className="font-normal text-base leading-6">Testimonial</span>
          <span className="font-normal text-base leading-6">FAQ</span>
        </div>

        <div className="flex items-center gap-[14px]">
          <Button variant="outline" className="text-[#4CAF4F] hidden lg:block">
            Login
          </Button>
          <Button
            variant="outline"
            className="bg-[#4CAF4F] rounded-[6px] text-white hidden lg:block"
          >
            Sign up
          </Button>

          <Sheet>
            <SheetTrigger>
              <div className="block lg:hidden">
                <img
                  src="/assets/hamburger.svg"
                  alt="menu"
                  className="h-[30px] w-[30px]"
                />
              </div>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col items-start gap-[30px] text-center">
                <span className="font-medium text-base leading-6 ">Home</span>
                <span className="font-normal text-base leading-6">Service</span>
                <span className="font-normal text-base leading-6">Feature</span>
                <span className="font-normal text-base leading-6">Product</span>
                <span className="font-normal text-base leading-6">
                  Testimonial
                </span>
                <span className="font-normal text-base leading-6">FAQ</span>
              </div>
              <div className="flex justify-around">
                <Button variant="outline" className="text-[#4CAF4F]  mt-5">
                  Login
                </Button>
                <Button
                  variant="outline"
                  className="bg-[#4CAF4F] rounded-[6px] text-white mt-5 "
                >
                  Sign up
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;
