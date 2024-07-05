import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="w-full h-[84px] bg-[#F5F7FA] mx-auto">
      <div className="py-6 flex items-center  justify-around">
        <img
          src="/assets/logo.svg"
          alt="logo"
          className="w-[154.49px] h-[24px]"
        />
        <div className="flex items-center gap-[50px] text-center">
          <span className="font-medium text-base leading-6 ">Home</span>
          <span className="font-normal text-base leading-6">Service</span>
          <span className="font-normal text-base leading-6">Feature</span>
          <span className="font-normal text-base leading-6">Product</span>
          <span className="font-normal text-base leading-6">Testimonial</span>
          <span className="font-normal text-base leading-6">FAQ</span>
        </div>

        <div className="flex items-center gap-[14px]">
          <Button variant="ghost" className="text-[#4CAF4F]">
            Login
          </Button>
          <Button
            variant="outline"
            className="bg-[#4CAF4F] rounded-[6px] text-white"
          >
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
