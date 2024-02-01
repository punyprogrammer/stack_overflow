"use client";
import { MenubarShortcut } from "@/components/ui/menubar";
import { DARK, SYSTEM, themes } from "@/constants/constants";
import { useTheme } from "@/context/themeProvider";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@radix-ui/react-menubar";
import Image from "next/image";
import React, { useContext } from "react";

const Theme = () => {
  const { mode, setMode } = useTheme();
  const switchTheme = (value: string) => {
    console.log("value", value);
    setMode(value);
    if (value !== SYSTEM) {
      localStorage.theme = value;
    } else {
      localStorage.removeItem("theme");
    }
  };
  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900  data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark-[state=open]:bg-dark-200">
          {mode === DARK ? (
            <Image
              height={20}
              width={20}
              alt="theme"
              src="/assets/icons/moon.svg"
              className="active-theme"
            />
          ) : (
            <Image
              height={20}
              width={20}
              alt="theme"
              src="/assets/icons/sun.svg"
              className="active-theme"
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="dark:border-dark-400 dark:bg-dark-300 absolute right-[-3rem] z-[100] mt-3 min-w-[120px] rounded border py-2">
          {themes?.map((item, index) => {
            return (
              <MenubarItem
                key={item.value}
                onClick={() => switchTheme(item.value)}
                className="dark:bg-dark-400 flex cursor-pointer items-center gap-4 px-2.5 py-2 outline-none"
              >
                <Image
                  src={item.icon}
                  width={16}
                  height={16}
                  alt={item.value}
                  className={`${mode === item.value && "active-theme"}`}
                />
                <p
                  className={`body-semibold text-light-500 ${mode === item.value ? "text-primary-500" : "text-dark100_light900"}`}
                >
                  {item.label}
                </p>
              </MenubarItem>
            );
          })}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
