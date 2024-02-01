import { Button } from "@/components/ui/button";
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
    </>
  );
}
