import SearchBar from "@/components/molecules/SearchBar";
import Filters from "@/components/molecules/Filters";

type Props = {
  defaultQuery?: string;
  formAction?: (formData: FormData) => void;
};

const Search = ({ defaultQuery, formAction }: Props) => {
  return (
    <form action={formAction} className="search flex items-center gap-x-4">
      <div className="search__bar flex-1">
        <SearchBar defaultValue={defaultQuery} />
      </div>
      <div className="search__filters">
        <Filters />
      </div>
    </form>
  );
};

export default Search;
