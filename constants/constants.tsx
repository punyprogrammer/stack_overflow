import {
  GenericStatChiptype,
  QuestionCardType,
  SidebarAuthLinks,
  SidebarLink,
} from "@/types";
export const DARK = "dark";
export const LIGHT = "light";
export const SYSTEM = "system";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];
export const sidebarAuthLinks: SidebarAuthLinks[] = [
  {
    imgURL: "/assets/icons/account.svg",
    route: "/sign-in",
  },
  {
    imgURL: "/assets/icons/sign-up.svg",
    route: "/sign-up",
  },
];
export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};
export const AnswerFilters = [
  { name: "Highest Upvotes", value: "highestUpvotes" },
  { name: "Lowest Upvotes", value: "lowestUpvotes" },
  { name: "Most Recent", value: "recent" },
  { name: "Oldest", value: "old" },
];

export const UserFilters = [
  { name: "New Users", value: "new_users" },
  { name: "Old Users", value: "old_users" },
  { name: "Top Contributors", value: "top_contributors" },
];

export const QuestionFilters = [
  { name: "Most Recent", value: "most_recent" },
  { name: "Oldest", value: "oldest" },
  { name: "Most Voted", value: "most_voted" },
  { name: "Most Viewed", value: "most_viewed" },
  { name: "Most Answered", value: "most_answered" },
];

export const TagFilters = [
  { name: "Popular", value: "popular" },
  { name: "Recent", value: "recent" },
  { name: "Name", value: "name" },
  { name: "Old", value: "old" },
];

export const HomePageFilters = [
  { name: "Newest", value: "newest" },
  { name: "Recommended", value: "recommended" },
  { name: "Frequent", value: "frequent" },
  { name: "Unanswered", value: "unanswered" },
];

export const GlobalSearchFilters = [
  { name: "Question", value: "question" },
  { name: "Answer", value: "answer" },
  { name: "User", value: "user" },
  { name: "Tag", value: "tag" },
];

export const questionsMockData: QuestionCardType[] = [
  {
    questionid: "1",
    title:
      "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
    tagList: ["typescript", "react"],
    author: "John Doe",
    authorAvatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
    daysAgo: 2,
    votes: 10,
    answers: 3,
    views: 100,
  },
  {
    questionid: "2",
    title: "Best practices for responsive web design",
    tagList: ["web-design", "css"],
    author: "Jane Smith",
    authorAvatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
    daysAgo: 5,
    votes: 15,
    answers: 5,
    views: 200,
  },
  {
    questionid: "3",
    title: "JavaScript vs. TypeScript: Which one to choose?",
    tagList: ["javascript", "typescript"],
    author: "Alice Johnson",
    authorAvatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
    daysAgo: 7,
    votes: 8,
    answers: 2,
    views: 80,
  },
  {
    questionid: "4",
    title: "Getting started with Node.js",
    tagList: ["nodejs", "javascript"],
    author: "Bob Williams",
    authorAvatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
    daysAgo: 3,
    votes: 12,
    answers: 4,
    views: 150,
  },
  {
    questionid: "5",
    title: "Frontend frameworks comparison: React vs. Angular vs. Vue",
    tagList: ["react", "angular", "vue"],
    author: "Eva Anderson",
    authorAvatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
    daysAgo: 10,
    votes: 20,
    answers: 7,
    views: 250,
  },
  {
    questionid: "6",
    title: "CSS Flexbox or Grid Layout: Which one is better?",
    tagList: ["css", "web-design"],
    author: "Mike Brown",
    authorAvatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
    daysAgo: 4,
    votes: 14,
    answers: 6,
    views: 180,
  },
  {
    questionid: "7",
    title: "Backend development with Python and Django",
    tagList: ["python", "django", "backend"],
    author: "Sarah Clark",
    authorAvatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
    daysAgo: 6,
    votes: 18,
    answers: 5,
    views: 220,
  },
  {
    questionid: "8",
    title: "Tips for optimizing website performance",
    tagList: ["performance", "web-development"],
    author: "Tom Rogers",
    authorAvatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
    daysAgo: 8,
    votes: 16,
    answers: 3,
    views: 190,
  },
  {
    questionid: "9",
    title: "Database design best practices",
    tagList: ["database", "design"],
    author: "Laura White",
    authorAvatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
    daysAgo: 9,
    votes: 13,
    answers: 4,
    views: 210,
  },
  {
    questionid: "10",
    title: "Creating a RESTful API with Express.js",
    tagList: ["nodejs", "expressjs", "api"],
    author: "David Lee",
    authorAvatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
    daysAgo: 1,
    votes: 7,
    answers: 2,
    views: 70,
  },
];
