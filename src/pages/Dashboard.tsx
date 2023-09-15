import React, { ReactNode } from "react";
import MovieDetails from "./MovieDetails";
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
      <aside className="w-[25%] rounded-tr-2xl rounded-br-2xl border-[2px] border-[#d1d5db] h-[100vh] py-[52px] overflow-auto">
        <Link
          href={`/`}
          className="flex items-center justify-start font-[700] text-[24px] leading-[24px] gap-[24px] mb-[70px] px-[20px] transition-colors duration-300 ease-in-out"
        >
          <Image
            src={Logo}
            alt="Logo"
            className="w-[50px] h-[50px] object-cover"
          />
          Movie Box
        </Link>
        <ul className="flex flex-col items-start w-[100%] font-Poppins">
          <Link
            href=""
            className="group flex items-center gap-[15px] font-[600] text-[20px] leading-[30px] text-[#666666] h-[86px] w-[100%] px-[42px] hover:bg-[#be123d10] hover:text-[#be123c] hover:border-r-[6px] hover:border-[#be123c] transition-colors duration-300 ease-in-out"
          >
            <GoHome className="w-[25px] h-[25px] group-hover:text-[#000]" />
            Home
          </Link>
          <Link
            href=""
            className="flex items-center gap-[15px] font-[600] text-[20px] leading-[30px] h-[86px] w-[100%] active:bg-[#be123daa] bg-[#be123d10] text-[#be123c] px-[42px] border-r-[6px] border-[#be123c] transition-colors duration-300 ease-in-out"
          >
            <BiCameraMovie className="w-[25px] h-[25px] text-[#000]" />
            Movies
          </Link>
          <Link
            href=""
            className="group flex items-center gap-[15px] font-[600] text-[20px] leading-[30px] text-[#666666] h-[86px] w-[100%] px-[42px] hover:bg-[#be123d10] hover:text-[#be123c] hover:border-r-[6px] hover:border-[#be123c] transition-colors duration-300 ease-in-out"
          >
            <PiMonitorPlay className="w-[25px] h-[25px] group-hover:text-[#000]" />
            TV Series
          </Link>
          <Link
            href=""
            className="group flex items-center gap-[15px] font-[600] text-[20px] leading-[30px] text-[#666666] h-[86px] w-[100%] px-[42px] hover:bg-[#be123d10] hover:text-[#be123c] hover:border-r-[6px] hover:border-[#be123c] transition-colors duration-300 ease-in-out"
          >
            <CgCalendarDates className="w-[25px] h-[25px] group-hover:text-[#000]" />
            Upcoming
          </Link>
          <div className="w-[100%] h-[210px] flex items-center justify-center mt-[38px]">
            <div className="rounded-[20px] bg-[#be123d10] border-[1px] border-[#be123c] w-[170px] h-[100%] pt-[42px] pl-[16px] pr-[10px] pb-[16px]">
              <h4 className="font-[600] text-[15px] leading-[22.5px] text-[#333333b0] mb-[9px] font-Poppins">
                Play movie quizes and earn
                <br /> free tickets
              </h4>
              <p className="text-[#666] text-[12px] leading-[18px] font-[500] font-Poppins mb-[10px]">
                50k people are playing now
              </p>
              <button className="bg-[#be123d20] text-[#be123c] font-Poppins text-[12px] font-[500] rounded-[30px] h-[30px] w-[112px] mx-[13px]">
                Start playing
              </button>
            </div>
          </div>
          <Link
            href=""
            className="group flex items-center gap-[15px] font-[600] text-[20px] leading-[30px] text-[#666666] h-[86px] w-[100%] px-[42px] mt-[24px]  hover:bg-[#be123d10] hover:text-[#be123c] hover:border-r-[6px] hover:border-[#be123c] transition-colors duration-300 ease-in-out"
          >
            <BiLogIn className="w-[25px] h-[25px] group-hover:text-[#000]" />
            Log out
          </Link>
        </ul>
      </aside>
      <main className="w-[75%] min-h-[100vh] py-[38px] px-[37px]">
        {children}
      </main>
    </div>
  );
};

export default Dashboard;