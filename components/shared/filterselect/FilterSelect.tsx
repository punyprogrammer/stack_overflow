"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CustomInputProps {
  filters: {
    name: string;
    value: string;
  }[];
  otherClasses?: string;
  containerClasses?: string;
}

const FilterSelect = ({
  filters,
  otherClasses,
  containerClasses,
}: CustomInputProps) => {
  return (
    <div className={`relative ${containerClasses} `}>
      <Select className="no-focus focus:none border-none shadow-none">
        <SelectTrigger
          className={`${otherClasses} body-regular light-border background-light800_dark300 text-dark500_light700  px-5 py-2.5 `}
        >
          <div className="min-w-[100px] flex-1 text-left">
            <SelectValue placeholder="Select a Filter" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="background-light800_dark300 text-dark500_light700 ">
            {filters?.map((item) => {
              return (
                <SelectItem key={item.value} value={item.value}>
                  {item.name}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterSelect;
