"use client";
import { sidebarLinks } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import SignedOutContainer from "../SignedOut";

const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="background-light900_dark200 light-border sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto px-12 pb-12 pt-36">
      <div className=" flex flex-col gap-3.5 ">
        {sidebarLinks?.map((item) => {
          const isActive =
            pathname.includes(item.route) || pathname === item.route;
          return (
            <>
              <Link
                href={item.route}
                className={` ${isActive ? "primary-gradient text-light-900 rounded-lg" : "text-dark300_light900"} flex  gap-2.5 px-2 py-4 sm:justify-center md:justify-start`}
              >
                <Image
                  height={20}
                  width={20}
                  src={item.imgURL}
                  alt={item.label}
                  className={`${isActive ? "" : "invert-colors"}`}
                />
                <p
                  className={`${isActive ? "base-bold" : "base-medium"} hidden md:block `}
                >
                  {item.label}
                </p>
              </Link>
            </>
          );
        })}
      </div>

      <SignedOutContainer />
    </div>
  );
};

export default LeftSidebar;
