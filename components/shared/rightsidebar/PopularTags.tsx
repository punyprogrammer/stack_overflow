import { popularTagsArray } from "@/constants/mockData";
import { PopularTagType } from "@/types";
import { Tags } from "lucide-react";
import React from "react";

export const PopularTagListItem: React.FC<PopularTagType> = ({
  count,
  tagName,
}) => {
  return (
    <div className="flex w-full justify-between">
      <div className="text-light400_light500 background-light800_dark300 subtle-medium  flex items-center justify-center rounded-md px-4 py-2 uppercase">
        {tagName}
      </div>
      <div className="text-dark500_light700 small-medium">{count}</div>
    </div>
  );
};
export const PopularTags = () => {
  return (
    <section className="mt-16 flex w-full flex-col ">
      <h3 className="h3-bold text-dark200_light900 py-6">Popular Tags</h3>
      {/* tags container */}
      <div className="flex flex-col gap-4">
        {popularTagsArray?.map((item) => (
          <PopularTagListItem key={item.tagName} {...item} />
        ))}
      </div>
    </section>
  );
};
