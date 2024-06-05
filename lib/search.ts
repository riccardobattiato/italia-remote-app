import { fetchCompanies } from "@/api/github";
import { Company, CompanyKey, CompanyFilterable } from "@/types/companies";
import Fuse, { Expression, IFuseOptions } from "fuse.js";

export type CompaniesSearchParams = Record<
  "search" | CompanyFilterable,
  string
>;

export const fuseOptions: IFuseOptions<Company> = {
  useExtendedSearch: true,
  keys: [
    CompanyKey.NAME,
    CompanyKey.TYPE,
    CompanyKey.CATEGORIES,
    CompanyKey.REMOTE_POLICY,
    CompanyKey.REMOTE_POLICY,
    CompanyKey.TAGS,
  ],
};

export const buildFuseQuery = (params: CompaniesSearchParams): Expression => {
  const { search, tags, ...filters } = params;
  let expression: Expression = { $and: [] };

  // Fuzzy search in name field only
  if (search) expression.$and?.push({ name: search });
  if (tags) {
    tags.split(",").forEach((tag) => {
      expression.$and?.push({ tags: `'${tag}` });
    });
  }

  // Exact search in Filterable fields
  Object.entries(filters).forEach(([filterKey, filterValue]) => {
    expression.$and?.push({
      [filterKey]: `=${filterValue}`,
    });
  });

  return expression;
};

export const getCompanies = async (
  params: CompaniesSearchParams,
): Promise<Company[]> => {
  const allCompanies = await fetchCompanies();
  const fuse = new Fuse(allCompanies, fuseOptions);

  if (Object.keys(params).length > 0) {
    const query = buildFuseQuery(params);

    return fuse.search(query).map((result) => result.item);
  }

  return allCompanies;
};
