import SearchBar from "@/components/molecules/SearchBar";

type Props = {
  query?: string;
  formAction?: (formData: FormData) => void;
};

const Search = ({ query, formAction }: Props) => {
  return (
    <form action={formAction} className="search flex items-center gap-x-4">
      <div className="search__bar flex-1">
        <SearchBar value={query} />
      </div>
      <div className="search__filters">Filters</div>
    </form>
  );
};

export default Search;
