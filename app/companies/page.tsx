import { getCompanies } from "@/api/github";

export default async function Home() {
  const companies = await getCompanies();
  console.log("REPOS", companies);
  return <main className="companies">Companies</main>;
}
