import { Endpoints } from "@octokit/types";

export type GetRepoContentsPathResponse =
  Endpoints["GET /repos/{owner}/{repo}/contents/{path}"]["response"];

export type Company = {
  name: string;
  url: string;
  career_page_url: string;
  type?: string;
  categories: string[];
  remote_policy: "Full" | "Hybrid" | "Optional";
  hiring_policies: Array<"Direct" | "Contract" | "Intermediary">;
  tags?: string[];
};
