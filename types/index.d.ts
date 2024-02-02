import { BADGE_CRITERIA } from "@/constants";

export interface SidebarLink {
  imgURL: string;
  route: string;
  label: string;
}
export interface QuestionListItemType {
  text: string;
  route: string;
}
export interface PopularTagType {
  tagName: string;
  count: number;
  customTagClass: string;
}
export interface SidebarAuthLinks {
  imgURL: string;
  route: string;
}
export interface Job {
  id?: string;
  employer_name?: string;
  employer_logo?: string | undefined;
  employer_website?: string;
  job_employment_type?: string;
  job_title?: string;
  job_description?: string;
  job_apply_link?: string;
  job_city?: string;
  job_state?: string;
  job_country?: string;
}

export interface Country {
  name: {
    common: string;
  };
}

export interface ParamsProps {
  params: { id: string };
}

export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}

export interface URLProps {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}

export interface BadgeCounts {
  GOLD: number;
  SILVER: number;
  BRONZE: number;
}

export type BadgeCriteriaType = keyof typeof BADGE_CRITERIA;
export interface GenericTagType {
  tagName: string;
  customTagClass: string;
}
export interface PopularTagsType {
  customTagClass: string;
}
export interface QuestionCardType {
  questionid: string;
  title: string;
  tagList: string[];
  author: string;
  authorAvatar: string;
  daysAgo: number;
  votes: number;
  answers: number;
  views: number;
}
export interface GenericStatChiptype {
  statLogo: string;
  statCount: number;
  statText: string;
}
