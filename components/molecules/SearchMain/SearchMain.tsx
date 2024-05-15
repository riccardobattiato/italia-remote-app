"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Company } from "@/types/api";
import { MagnifyingGlassIcon, ArchiveIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useState } from "react";

export type SearchMainProps = {
  companies?: Company[];
};

const SearchMain = ({ companies }: SearchMainProps) => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const handleSearch = () => {
    if (value) {
      const params = new URLSearchParams({ search: value });
      router.push(`/companies?${params}`);
    }
  };

  const handleViewAll = () => {
    router.push("/companies");
  };

  return (
    <div className="search-main">
      <div className="search-main__input">
        <Input
          placeholder="Type a company name to start..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="search-main__buttons mt-4 flex justify-center gap-x-5 items-center">
        <Button onClick={handleSearch}>
          <MagnifyingGlassIcon className="mr-2 h-4 w-4" /> Search
        </Button>
        <Button variant="outline" onClick={handleViewAll}>
          <ArchiveIcon className="mr-2 h-4 w-4" /> View all companies
        </Button>
      </div>
    </div>
  );
};

export default SearchMain;
