import { useState } from "react";
import { useQuery } from "react-query";
import { useDebounce } from "use-debounce/lib";
import SearchBar from "../components/search-bar";
import { searchQueryRequest } from "../gqlRequests";
import UserList from "../components/userList";

export default function SearchContainer() {
  const [searchString, setSearchString] = useState("");
  const [debouncedFilter] = useDebounce(searchString, 500);
  const { data, isLoading } = useQuery(
    ["users", debouncedFilter],
    async () => searchQueryRequest(debouncedFilter),
    { enabled: Boolean(debouncedFilter) }
  );

  const handleSearch = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form
        onSubmit={handleSearch}
        className=" bg-white shadow-md rounded px-8 py-8 pt-8"
      >
        <div className="px-4 pb-4">
          <SearchBar
            searchString={searchString}
            setSearchString={setSearchString}
          />
        </div>
      </form>
      <UserList data={data} />
    </div>
  );
}
