import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon, ArchiveIcon } from "@radix-ui/react-icons";
import { redirect } from "next/navigation";

export type SearchMainProps = {
  formAction?: (formData: FormData) => void;
};

const SearchMain = ({ formAction }: SearchMainProps) => {
  return (
    <form action={formAction} className="search-main">
      <div className="search-main__input">
        <Input name="query" placeholder="Type a company name to start..." />
      </div>
      <div className="search-main__buttons mt-4 flex justify-center gap-x-5 items-center">
        <Button type="submit">
          <MagnifyingGlassIcon className="mr-2 h-4 w-4" /> Search
        </Button>
        <a
          href="/companies"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          <ArchiveIcon className="mr-2 h-4 w-4" /> View all companies
        </a>
      </div>
    </form>
  );
};

export default SearchMain;
