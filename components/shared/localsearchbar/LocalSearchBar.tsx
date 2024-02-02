import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

interface CustomInputProps {
  route: string;
  iconPosition: string;
  placeholder: string;
  imgSrc: string;
  otherClasses?: string;
}
const LocalSearchBar = ({
  route,
  iconPosition,
  placeholder,
  imgSrc,
  otherClasses,
}: CustomInputProps) => {
  return (
    <div className="background-light800_darkgradient w-full">
      <div
        className={`background-light800_darkgradient  flex min-h-[56px]  grow items-center  gap-4  rounded-xl px-4 ${otherClasses}`}
      >
        {iconPosition === "left" && (
          <Image
            src={imgSrc}
            height={24}
            width={24}
            alt="search"
            className="cursor-pointer"
          />
        )}
        <Input
          type="text"
          placeholder={placeholder}
          value=""
          className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
        />{" "}
        {iconPosition === "right" && (
          <Image
            src={imgSrc}
            height={24}
            width={24}
            alt="search"
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default LocalSearchBar;
