import { GenericStatChiptype, GenericTagType, SidebarAuthLinks } from "@/types";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export const GenericAuthLogo: React.FC<SidebarAuthLinks> = ({
  imgURL,
  route,
}) => {
  return (
    <div className="btn-secondary flex min-h-[41px] items-center  justify-center rounded-xl p-4 ">
      <Link href={route} className="invert-colors">
        <Image src={imgURL} height={20} width={20} alt={route} />
      </Link>
    </div>
  );
};
export const GenericTag: React.FC<GenericTagType> = ({
  tagName,
  customTagClass,
}) => {
  return (
    <div
      className={`text-light400_light500 background-light800_dark300   flex items-center justify-center rounded-md px-4 py-2  ${customTagClass}`}
    >
      {tagName}
    </div>
  );
};
export const GenericStatChip = ({
  statCount,
  statLogo,
  statText,
}: GenericStatChiptype) => {
  return (
    <div className="flex items-center gap-1">
      <Image
        className="fill-red-600"
        src={statLogo}
        height={20}
        width={20}
        alt={statText}
      />
      <span className="flex small-medium text-dark400_light700">
        {statCount}
      </span>
      <span className="flex small-medium  text-dark400_light700">
        {statText}
      </span>
    </div>
  );
};
