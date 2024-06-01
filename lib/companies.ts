import { fetchCompanies } from "@/api/github";
import { Company } from "@/types/api";
import Fuse, { IFuseOptions } from "fuse.js";

export type CompaniesSearchParams = {
  search?: string;
};

export const fuseOptions: IFuseOptions<Company> = {
  keys: ["name", "url"],
};

export const getCompanies = async (
  searchParams?: CompaniesSearchParams,
): Promise<Company[]> => {
  const allCompanies = await fetchCompanies();
  const fuse = new Fuse(allCompanies, fuseOptions);

  if (searchParams?.search) {
    return fuse.search(searchParams.search).map((result) => result.item);
  }

  return allCompanies;
};
