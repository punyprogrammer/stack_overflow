import React from "react";
import Questions from "./Questions";
import { PopularTags } from "./PopularTags";

const RightSidebar = () => {
  return (
    <div className="hidden lg:block">
      <div
        className="background-light900_dark200 light-border sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto px-12 pb-12 pt-36
      lg:w-[355px]"
      >
        <Questions />
        <PopularTags />
      </div>
    </div>
  );
};

export default RightSidebar;
