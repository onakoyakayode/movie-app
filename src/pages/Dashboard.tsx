import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/tv.svg";
import { GoHome } from "react-icons/go";
import { BiCameraMovie } from "react-icons/bi";
import { PiMonitorPlay } from "react-icons/pi";
import { CgCalendarDates } from "react-icons/cg";
import { BiLogIn } from "react-icons/bi";

interface DashboardProps {
  children: ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  return (
    <div className="flex items-start justify-start w-[100%] h-[100vh] overflow-hidden">
      <aside className="w-[10%] md:w-[15%] lg:w-[20%] rounded-sm md:rounded-tr-2xl rounded-br-2xl border-[2px] border-[#d1d5db] h-[100vh] py-[25px] md:py-[38px] lg:py-[52px] overflow-auto">
        <Link
          href={`/`}
          className="flex items-center justify-start font-[700] text-[24px] leading-[24px] gap-0 md:gap-[16px] lg:gap-[20px] mb-[70px] px-[10px] md:px-[20px] transition-colors duration-300 ease-in-out"
        >
          <Image
            src={Logo}
            alt="Logo"
            className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] object-cover"
          />
          <span className="hidden md:block"> Movie Box</span>
        </Link>
        <ul className="flex flex-col items-start w-[100%] font-Poppins">
          <Link
            href=""
            className="group flex items-center gap-0 md:gap-[15px] font-[600] text-[18px] leading-[30px] text-[#666666] h-[66px] md:h-[86px] w-[100%] px-[15px] md:px-[42px] hover:bg-[#be123d10] hover:text-[#be123c] hover:border-r-[3px] md:hover:border-r-[6px] hover:border-[#be123c] transition-colors duration-300 ease-in-out"
          >
            <GoHome className="w-[40px] h-[40px] md:w-[25px] md:h-[25px] group-hover:text-[#000]" />
            <span className="hidden md:block">Home</span>
          </Link>
          <Link
            href=""
            className="group flex items-center gap-0 md:gap-[15px] font-[600] text-[18px] leading-[30px] h-[66px] md:h-[86px] w-[100%] active:bg-[#be123daa] bg-[#be123d10] text-[#be123c] px-[15px] md:px-[42px] border-r-[3px] md:border-r-[6px] border-[#be123c] transition-colors duration-300 ease-in-out"
          >
            <BiCameraMovie className="w-[40px] h-[40px] md:w-[25px] md:h-[25px] text-[#000]" />
            <span className="hidden md:block">Movies</span>
          </Link>
          <Link
            href=""
            className="group flex items-center gap-0 md:gap-[15px] font-[600] text-[18px] leading-[30px] text-[#666666] h-[66px] md:h-[86px] w-[100%] px-[15px] md:px-[42px] hover:bg-[#be123d10] hover:text-[#be123c] hover:border-r-[3px] md:hover:border-r-[6px] hover:border-[#be123c] transition-colors duration-300 ease-in-out"
          >
            <PiMonitorPlay className="w-[40px] h-[40px] md:w-[25px] md:h-[25px] group-hover:text-[#000]" />
            <span className="hidden md:block">TV Series</span>
          </Link>
          <Link
            href=""
            className="group flex items-center gap-0 md:gap-[15px] font-[600] text-[18px] leading-[30px] text-[#666666] h-[66px] md:h-[86px] w-[100%] px-[15px] md:px-[42px] hover:bg-[#be123d10] hover:text-[#be123c] hover:border-r-[3px] md:hover:border-r-[6px] hover:border-[#be123c] transition-colors duration-300 ease-in-out"
          >
            <CgCalendarDates className="w-[40px] h-[40px] md:w-[25px] md:h-[25px] group-hover:text-[#000]" />
            <span className="hidden md:block">Upcoming</span>
          </Link>
          <div className="w-[100%] h-[210px] hidden md:flex items-center justify-center mt-[38px]">
            <div className="rounded-[20px] bg-[#be123d10] border-[1px] border-[#be123c] md:w-[170px] lg:w-[230px] h-[100%] pt-[42px] pl-[16px] pr-[10px] pb-[16px]">
              <h4 className="font-[600] text-[15px] md:text-[16px] leading-[22.5px] text-[#333333b0] mb-[9px] font-Poppins">
                Play movie quizes and earn
                <br /> free tickets
              </h4>
              <p className="text-[#666] text-[12px] md:text-[13px] leading-[18px] font-[500] font-Poppins mb-[10px] lg:mb-[15px]">
                50k people are playing now
              </p>
              <button className="bg-[#be123d20] text-[#be123c] font-Poppins text-[12px] md:text-[14px] font-[500] rounded-[30px] h-[30px] w-[112px] md:w-[120px] mx-[13px] lg:mx-[35px]">
                Start playing
              </button>
            </div>
          </div>
          <Link
            href=""
            className="group flex items-center gap-[15px] font-[600] text-[18px] leading-[30px] text-[#666666] h-[66px] md:h-[86px] w-[100%] px-[15px] md:px-[42px] mt-[300%] md:mt-[24px]  hover:bg-[#be123d10] hover:text-[#be123c] hover:border-r-[3px] md:hover:border-r-[6px] hover:border-[#be123c] transition-colors duration-300 ease-in-out"
          >
            <BiLogIn className="w-[40px] h-[40px] md:w-[25px] md:h-[25px] group-hover:text-[#000]" />
            <span className="hidden md:block">Log out</span>
          </Link>
        </ul>
      </aside>
      <main className="w-[88%] md:w-[85%] lg:w-[80%] min-h-[100vh] py-[20px] px-[20px] md:py-[38px] md:px-[37px]">
        {children}
      </main>
    </div>
  );
};

export default Dashboard;
