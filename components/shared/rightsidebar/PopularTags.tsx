import { popularTagsArray } from "@/constants/mockData";
import { PopularTagType, PopularTagsType } from "@/types";
import React from "react";
import { GenericTag } from "../Utils";

export const PopularTagListItem: React.FC<PopularTagType> = ({
  count,
  tagName,
  customTagClass,
}) => {
  return (
    <div className="flex w-full justify-between">
      <GenericTag tagName={tagName} customTagClass={customTagClass} />
      <div className="text-dark500_light700 small-medium">{count}</div>
    </div>
  );
};

export const PopularTags: React.FC<PopularTagsType> = ({ customTagClass }) => {
  return (
    <section className="mt-16 flex w-full flex-col ">
      <h3 className="h3-bold text-dark200_light900 py-6">Popular Tags</h3>
      {/* tags container */}
      <div className="flex flex-col gap-4">
        {popularTagsArray?.map((item) => (
          <PopularTagListItem
            key={item.tagName}
            {...item}
            customTagClass={customTagClass}
          />
        ))}
      </div>
    </section>
  );
};
