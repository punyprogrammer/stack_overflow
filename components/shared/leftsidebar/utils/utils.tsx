import { SidebarAuthLinks } from "@/types";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export const GenericAuthLogo: React.FC<SidebarAuthLinks> = ({
  imgURL,
  route,
}) => {
  console.log("IMGURL", imgURL);
  return (
    <div className="btn-secondary flex min-h-[41px] items-center  justify-center rounded-xl p-4 ">
      <Link href={route} className="invert-colors">
        <Image src={imgURL} height={20} width={20} alt={route} />
      </Link>
    </div>
  );
};
