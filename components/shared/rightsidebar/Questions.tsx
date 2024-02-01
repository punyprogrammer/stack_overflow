import { questionsMockArray } from "@/constants/mockData";
import { QuestionListItemType } from "@/types";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const QuestionListItem: React.FC<QuestionListItemType> = ({ route, text }) => {
  return (
    <Link href={route} className="flex items-center justify-between ">
      <p className="text-dark500_light700 body-medium w-[248x] pr-4">{text}</p>
      <Image
        src={"/assets/icons/chevron-right.svg"}
        alt="arrow"
        width={20}
        className="invert-colors"
        height={20}
      />
    </Link>
  );
};
const Questions = () => {
  return (
    <section>
      <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
      <div className="mt-8 flex flex-col gap-8">
        {questionsMockArray?.map((item) => (
          <QuestionListItem key={item.text} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Questions;
