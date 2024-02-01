import React from "react";
import Questions from "./Questions";
import { PopularTags } from "./PopularTags";

const RightSidebar = () => {
  return (
    <div className="hidden lg:block">
      <div
        className="background-light900_dark200 flex-start fixed    right-0 hidden h-full flex-col items-center justify-between overflow-y-scroll
      px-[20px] pb-[32px] 
      pt-[156px] lg:w-[350px]"
      >
        <Questions />
        <PopularTags />
      </div>
    </div>
  );
};

export default RightSidebar;
