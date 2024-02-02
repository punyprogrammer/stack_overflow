import React from "react";
import { GenericStatChiptype, QuestionCardType } from "@/types";
import Image from "next/image";
import { GenericStatChip } from "../Utils";

const StatsContainer = ({ votes, answers, views }: QuestionCardType) => {
  return (
    <div className="flex items-center gap-[10px]">
      <GenericStatChip
        statCount={votes}
        statText={"Votes"}
        key={1}
        statLogo="/assets/icons/like.svg"
      />
      <GenericStatChip
        statCount={answers}
        statText={"Answers"}
        key={2}
        statLogo="/assets/icons/message.svg"
      />
      <GenericStatChip
        statCount={views}
        statText={"Views"}
        key={3}
        statLogo="/assets/icons/eye.svg"
      />
    </div>
  );
};
const QuestionCardBottom = (props: QuestionCardType) => {
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
    <section className="flex flex-col  gap-4  mdl:flex-row mdl:justify-between pt-6 ">
      {/* Left content */}
      <div className="flex items-center">
        <div className="rounded-full overflow-hidden w-5 h-5 relative">
          <Image
            layout="fill"
            objectFit="cover"
            alt={author}
            src={authorAvatar}
            className="rounded-full"
          />
        </div>
        <span className="inline-flex body-medium text-dark400_light700 ml-1">
          {author}
        </span>
        <span className="inline-flex small-medium  text-dark400_light700 ml-2">{`asked ${daysAgo} days ago`}</span>
      </div>
      <StatsContainer {...props} />
    </section>
  );
};

export default QuestionCardBottom;
