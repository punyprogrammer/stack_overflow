import { QuestionCardType, QuestionListItemType } from "@/types";
import React from "react";
import QuestionCard from "./QuestionCard";

interface InputProps {
  questions: QuestionCardType[];
}
const QuestionList = ({ questions }: InputProps) => {
  return (
    <div className="mt-10 flex flex-col gap-6">
      {questions?.map((item) => (
        <QuestionCard key={item.questionid} {...item} />
      ))}
    </div>
  );
};

export default QuestionList;
