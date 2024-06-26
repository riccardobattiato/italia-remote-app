import ScrollToTop from "@/components/atoms/ScrollToTop";
import Search from "@/components/organisms/Search";
import CompaniesGrid from "@/components/organisms/CompaniesGrid";
import { updateSearch } from "./actions";
import { getCompanies, type CompaniesSearchParams } from "@/lib/search";

type Props = {
  searchParams: CompaniesSearchParams;
};

export default async function Companies({ searchParams }: Props) {
  const companies = await getCompanies(searchParams);

  return (
    <main className="companies-page">
      <div className="container mx-auto pt-8 px-16 lg:px-20">
        <div className="companies-page__search">
          <Search
            formAction={updateSearch}
            defaultQuery={searchParams?.search}
          />
        </div>
        <div className="companies-page__cards mt-12">
          <CompaniesGrid items={companies} />
        </div>
      </div>
      <div className="companies-page__scroll fixed bottom-4 right-4">
        <ScrollToTop />
      </div>
    </main>
  );
}
