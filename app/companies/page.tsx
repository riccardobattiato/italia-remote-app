import { getCompanies } from "@/api/github";
import ScrollToTop from "@/components/atoms/ScrollToTop";
import CompaniesGrid from "@/components/organisms/CompaniesGrid/CompaniesGrid";

export default async function Home() {
  const companies = await getCompanies();
  return (
    <main className="companies-page">
      <div className="container mx-auto px-16 lg:px-20">
        <div className="companies-page__search">Search</div>
        <div className="companies-page__cards mt-12 md:mt-16">
          <CompaniesGrid items={companies} />
        </div>
      </div>
      <div className="companies-page__scroll fixed bottom-4 right-4">
        <ScrollToTop />
      </div>
    </main>
  );
}
