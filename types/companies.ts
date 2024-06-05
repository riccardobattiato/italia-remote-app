import { Endpoints } from "@octokit/types";

export type GetRepoContentsPathResponse =
  Endpoints["GET /repos/{owner}/{repo}/contents/{path}"]["response"];

export enum CompanyKey {
  NAME = "name",
  URL = "url",
  CAREER_PAGE_URL = "career_page_url",
  TYPE = "type",
  CATEGORIES = "categories",
  REMOTE_POLICY = "remote_policy",
  HIRING_POLICIES = "hiring_policies",
  TAGS = "tags",
}

export type CompanyFilterable = Extract<
  CompanyKey,
  | CompanyKey.TYPE
  | CompanyKey.CATEGORIES
  | CompanyKey.REMOTE_POLICY
  | CompanyKey.HIRING_POLICIES
  | CompanyKey.TAGS
>;

export type Company = {
  [CompanyKey.NAME]: string;
  [CompanyKey.URL]: string;
  [CompanyKey.CAREER_PAGE_URL]: string;
  [CompanyKey.TYPE]?: string;
  [CompanyKey.CATEGORIES]: string[];
  [CompanyKey.REMOTE_POLICY]: "Full" | "Hybrid" | "Optional";
  [CompanyKey.HIRING_POLICIES]: Array<"Direct" | "Contract" | "Intermediary">;
  [CompanyKey.TAGS]?: string[];
};
