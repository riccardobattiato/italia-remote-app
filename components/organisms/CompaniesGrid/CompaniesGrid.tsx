"use client";

import { Company } from "@/types/api";
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
    />
  </div>
);

export default CompaniesGrid;
