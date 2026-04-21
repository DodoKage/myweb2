import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Chris | AI爱好者·产品设计者",
  DESCRIPTION: "关注 AI 产品方向，擅长从定义问题开始，把想法变成结构、内容和可执行方案。",
  EMAIL: "your@email.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "首页",
  DESCRIPTION: "关注 AI 产品方向，擅长从定义问题开始，把想法变成结构、内容和可执行方案。",
};

export const BLOG: Metadata = {
  TITLE: "笔记",
  DESCRIPTION: "关于产品、AI 和表达的思考记录。",
};

export const PROJECTS: Metadata = {
  TITLE: "项目",
  DESCRIPTION: "我参与过的项目，以及背后的思考过程。",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/",
  },
  {
    NAME: "微信",
    HREF: "#",
  },
];
