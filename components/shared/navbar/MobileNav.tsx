"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants/constants";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {sidebarLinks?.map((item) => {
        const isActive =
          pathname.includes(item.route) || pathname === item.route;
        return (
          <SheetClose key={item.label} asChild>
            <Link
              href={item.route}
              className={`${isActive ? "primary-gradient text-light-900 rounded-lg" : "text-dark300_light900"} flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                width={20}
                height={20}
                alt={item.label}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          height={36}
          width={36}
          alt="hamburger"
          src="/assets/icons/hamburger.svg"
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <Link className="flex items-center gap-1" href={"/"}>
          <Image
            src={"/assets/images/site-logo.svg"}
            width={23}
            height={23}
            alt="Stuck Overflow"
          />
          <p className="h2-bold font-spaceGrotesk text-dark-100 text-dark100_light900 ml-2">
            Stuck
            <span className="text-primary-500">Overflow</span>
          </p>
        </Link>
        <div>
          <NavContent />
          <SheetClose asChild></SheetClose>
          <SignedOut>
            <div className="mt-6 flex flex-col gap-3">
              <SheetClose asChild>
                <Link href="sign-in">
                  <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none outline-none">
                    <span className="primary-text-gradient">Log In</span>
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="sign-up">
                  <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none ">
                    <span>Sign up</span>
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
