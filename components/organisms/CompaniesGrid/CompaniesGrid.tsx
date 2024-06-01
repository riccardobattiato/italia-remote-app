"use client";

import dynamic from "next/dynamic";
import { Company } from "@/types/companies";
import CardCompany from "@/components/molecules/CardCompany";

const Masonry = dynamic(
  () => import("masonic").then((mod) => mod.Masonry<Company>),
  {
    ssr: false,
  },
);

type Props = {
  items: Company[];
};

const CompaniesGrid = ({ items }: Props) => (
  <div className="companies-grid">
    <Masonry
      items={items}
      render={CardCompany}
      maxColumnCount={3}
      columnGutter={32}
      // https://github.com/jaredLunde/masonic/issues/12
      key={crypto.randomUUID()}
      itemKey={(item) => item.url}
    />
  </div>
);

export default CompaniesGrid;
