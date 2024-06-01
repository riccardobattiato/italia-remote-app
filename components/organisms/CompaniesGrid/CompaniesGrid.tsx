"use client";

import { Company } from "@/types/companies";
import { Masonry } from "masonic";
import CardCompany from "@/components/molecules/CardCompany";

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
