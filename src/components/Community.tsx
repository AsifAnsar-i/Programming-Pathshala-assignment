import React from "react";

const Community = () => {
  return <div className="w-full h-[500px]">
         <div className="flex flex-col gap-[16px] py-6">
              <div className="flex flex-col ">
                <p className="font-semibold text-[36px]  text-[#4D4D4D] leading-[44px] text-center">Manage your entire community</p>
                <p className="font-semibold text-[36px]  text-[#4D4D4D] leading-[44px] text-center">in a single system</p>
                <p className="font-normal text-[#18191F]  text-sm leading-6 text-center mt-3">Who is Nextcent suitable for?</p>
              </div>
              <div className="flex justify-around items-center px-20">
                <div className="flex flex-col max-w-[299px] gap-[8px] items-center border shadow-sm rounded-[8px] p-9">
                  <img src="/assets/commu1.svg" alt="community" className="w-[65px] h-[56px]" />
                  <p className="font-semibold text-[36px]  text-[#4D4D4D] leading-[44px] text-center">Membership Organisations</p>
                  <p className="font-normal text-[#18191F]  text-xs leading-6 text-center">Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className="flex flex-col max-w-[299px] gap-[8px] items-center border shadow-sm rounded-[8px] p-9">
                  <img src="/assets/commu2.svg" alt="community" className="w-[65px] h-[56px]" />
                  <p className="font-semibold text-[36px]  text-[#4D4D4D] leading-[44px] text-center">National Associations</p>
                    <p className="font-normal text-[#18191F]  text-xs leading-6 text-center">Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className="flex flex-col max-w-[299px] gap-[8px] items-center border shadow-sm rounded-[8px] p-9">
                  <img src="/assets/commu3.svg" alt="community" className="w-[65px] h-[56px]" />
                  <p className="font-semibold text-[36px]  text-[#4D4D4D] leading-[44px] text-center">Clubs And Groups</p>
                    <p className="font-normal text-[#18191F]  text-xs leading-6 text-center">Our membership management software provides full automation of membership renewals and payments</p>
                </div>
              </div>
         </div>
  </div>;
};

export default Community;
