import FilterSelect from "@/components/shared/filterselect/FilterSelect";
import LocalSearchBar from "@/components/shared/localsearchbar/LocalSearchBar";
import QuestionList from "@/components/shared/questioncard/QuestionList";
import TagsContainer from "@/components/shared/tagscontainer/TagsContainer";
import { Button } from "@/components/ui/button";
import { HomePageFilters, questionsMockData } from "@/constants/constants";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse items-center justify-between  gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900 self-start">
          All Questions
        </h1>
        <Link href="/ask-question" className=" flex justify-end max-sm:w-full">
          <Button className="primary-gradient text-dark100_light900  min-h-[46px] px-4 py-3 ">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions ..."
          otherClasses="flex-1"
        />
        <FilterSelect
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[100px]"
          containerClasses=" md:hidden"
        />
      </div>
      <TagsContainer filters={HomePageFilters} customTagClass="body-medium " />
      <QuestionList questions={questionsMockData} />
    </>
  );
}
