import { SignedOut } from "@clerk/nextjs";

import React from "react";

import Link from "next/link";
import { Button } from "../ui/button";
import { sidebarAuthLinks } from "@/constants/constants";
import { GenericAuthLogo } from "./Utils";

const SignOutForMobile = () => {
  return (
    <div className="mt-8 hidden flex-col gap-2 rounded-xl sm:flex md:hidden">
      {sidebarAuthLinks?.map((item) => {
        return <GenericAuthLogo key={item.route} {...item} />;
      })}
    </div>
  );
};

const SignedOutContainer = () => {
  return (
    <SignedOut>
      <div className="mt-6  hidden flex-col gap-3 md:flex">
        <Link href="sign-in">
          <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none outline-none">
            <span className="primary-text-gradient">Log In</span>
          </Button>
        </Link>

        <Link href="sign-up">
          <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none ">
            <span>Sign up</span>
          </Button>
        </Link>
      </div>
      <SignOutForMobile />
    </SignedOut>
  );
};

export default SignedOutContainer;
