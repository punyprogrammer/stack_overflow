import React from "react";
import { GenericTag } from "../Utils";

interface TagsInput {
  filters: {
    name: string;
    value: string;
  }[];
  customTagClass: string;
  tagContainerClass?: string;
}
const TagsContainer = ({
  filters,
  customTagClass,
  tagContainerClass,
}: TagsInput) => {
  return (
    <div className="mt-8 hidden items-center gap-2  md:flex">
      {filters?.map((item) => {
        return (
          <GenericTag
            key={item.value}
            tagName={item.value}
            customTagClass={customTagClass}
          />
        );
      })}
    </div>
  );
};

export default TagsContainer;
