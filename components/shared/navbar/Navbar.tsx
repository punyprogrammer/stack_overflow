import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200  shadow-light100_darknone fixed z-50 w-full gap-5 p-6">
      <Link className="flex items-center gap-1" href={"/"}>
        <Image
          src={"/assets/images/site-logo.svg"}
          width={23}
          height={23}
          alt="Stuck Overflow"
        />
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 ml-2 max-sm:hidden ">
          Stuck
          <span className="text-primary-500">Overflow</span>
        </p>
      </Link>
      Global Search
      {/* Theme container */}
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
