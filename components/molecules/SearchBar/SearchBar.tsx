import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

type Props = {
  value?: string;
};

const SearchBar = ({ value }: Props) => (
  <div className="search-bar relative">
    <div className="search-bar__button absolute inset-0 right-auto">
      <Button
        variant="ghost"
        size="icon"
        className="hover:bg-transparent"
        type="submit"
      >
        <MagnifyingGlassIcon className="h-4 w-4" />
      </Button>
    </div>
    <div className="search-bar__input">
      <Input
        name="query"
        placeholder="Type something..."
        value={value}
        className="pl-10"
      />
    </div>
  </div>
);

export default SearchBar;
