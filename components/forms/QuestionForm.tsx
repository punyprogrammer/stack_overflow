"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { QuestionsSchema } from "@/lib/validations";
import { z } from "zod";
import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { GenericTag } from "../shared/Utils";
import Image from "next/image";
import { createQuestion } from "@/lib/actions/question.actions";

export function QuestionForm() {
  const [submiting, setSubmiting] = useState(false);
  // For editor
  const editorRef = useRef(null);
  // 1. Define your form.
  const form = useForm<z.infer<typeof QuestionsSchema>>({
    resolver: zodResolver(QuestionsSchema),
    defaultValues: {
      title: "",
      explanation: "",
      tags: [],
    },
  });
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof QuestionsSchema>) {
    try {
      setSubmiting(true);
      await createQuestion({});
    } catch (error) {
      console.log(error);
    } finally {
      setSubmiting(false);
    }
  }
  // on key down handler for form
  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: any
  ) => {
    if (e.key === "Enter" && field.name === "tags") {
      e.preventDefault();
      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value;
      // non empty tag value
      if (tagValue !== "") {
        if (tagValue.length > 15) {
          return form.setError("tags", {
            type: "required",
            message: "Tag must be less than 15 characters",
          });
        }
        // not duplicate tag
        if (!field.value.includes(tagValue as never)) {
          form.setValue("tags", [...field.value, tagValue]);
          tagInput.value = "";
          form.clearErrors("tags");
          console.log("Form values", form.getValues("tags"));
        }
      } else {
        form.trigger();
      }
    }
  };
  // remove tag
  const handleTagRemove = (
    e: React.MouseEvent<HTMLImageElement>,
    tagName: string
  ) => {
    const currentTagList = form.getValues("tags") || [];
    const newTagList = currentTagList.filter((item) => item != tagName);
    form.setValue("tags", newTagList);
  };
  return (
    <Form {...form}>
      <form
        className="flex flex-col w-full gap-10 mt-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="paragraph-semi-bold text-dark400_light800">
                Question Title <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input
                  className="no-focus paragraph-regular background-light800_darkgradient light-border-2 text-dark300_light700 min-h-[56px] border"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Be specific and imagine that you are asking it to someone
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="explanation"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="paragraph-semi-bold text-dark400_light800">
                Detailed explanation of your problem?{" "}
                <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Editor
                  apiKey={process.env.NEXT_PUBLIC_TINY_MCE_API_KEY}
                  // @ts-ignore
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  initialValue="<p>This is the initial content of the editor.</p>"
                  init={{
                    height: 350,
                    menubar: false,
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "print",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "code",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "paste",
                      "code",
                      "help",
                      "wordcount",
                      "codesample",
                    ],
                    toolbar:
                      "undo redo | " +
                      "codesample | bold italic backcolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist" +
                      "removeformat | help",
                    content_style: "body { font-family:Inter; font-size:16px }",
                  }}
                  onBlur={field.onBlur}
                  onEditorChange={(content) => field.onChange(content)}
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Introduce the problem and expand on what you put in the title.
                Minimum 20 characters.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="paragraph-semi-bold text-dark400_light800">
                Tags<span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <>
                  <Input
                    className="no-focus paragraph-regular background-light800_darkgradient light-border-2 text-dark300_light700 min-h-[56px] border"
                    placeholder="Add tags..."
                    onKeyDown={(e) => handleInputKeyDown(e, field)}
                  />
                  <div className="flex gap-4">
                    {form.getValues("tags")?.map((item) => (
                      <GenericTag
                        key={item}
                        tagName={item}
                        customTagClass="body-medium pr-2 uppercase subtle-medium"
                        rightChildren={
                          <div>
                            <Image
                              src="/assets/icons/close.svg"
                              height={12}
                              width={12}
                              alt={"close"}
                              className="invert-colors  ml-2 cursor-pointer"
                              onClick={(e) => handleTagRemove(e, item)}
                            />
                          </div>
                        }
                      />
                    ))}
                  </div>
                </>
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Add up to 5 tags to describe what your question is about. Start
                typing to see suggestions.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="primary-gradient !text-light-900 w-fit"
          disabled={submiting}
        >
          {submiting ? "Submiting" : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
