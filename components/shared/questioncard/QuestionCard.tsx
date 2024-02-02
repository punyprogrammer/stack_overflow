import { GenericTagType, QuestionCardType } from "@/types";
import React from "react";
import TagsContainer from "../tagscontainer/TagsContainer";
import { GenericTag } from "../Utils";
import QuestionCardBottom from "./QuestionCardBottom";

interface TagListType {
  tagList: string[];
  customTagClass: string;
}
const TagList = ({ tagList, customTagClass }: TagListType) => {
  return (
    <div className="flex items:center gap-2 pt-4">
      {tagList?.map((item) => {
        return (
          <GenericTag
            key={item}
            customTagClass={customTagClass}
            tagName={item}
          />
        );
      })}
    </div>
  );
};
const QuestionCard = (props: QuestionCardType) => {
  const {
    answers,
    author,
    authorAvatar,
    daysAgo,
    questionid,
    tagList,
    title,
    views,
    votes,
  } = props;
  return (
    <div className="background-light900_darkgradient  rounded-xl px-11 py-9 light-border shadow-light100_darknone">
      <h3 className="h3-semibold text-dark200_light900 line-clamp-1">
        {title}
      </h3>
      <TagList tagList={tagList} customTagClass="subtle-medium uppercase" />
      <QuestionCardBottom {...props} />
    </div>
  );
};

export default QuestionCard;
