import { StackIcon } from "./stack";

export interface PortfolioItem {
  projectId: string;
  images: string[];
  title: string;
  subTitle?: string;
  projectDesc: string;
  roles: string;
  stacks: StackIcon[];
  createdAt: Date;
  finishedAt?: Date;
}
