import { useState } from "react";
import { useQuery } from "react-query";
import { useDebounce } from "use-debounce/lib";
import { searchQueryRequest } from "../gqlRequests";

export default function SearchBar() {
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
    <form
      onSubmit={handleSearch}
      className=" bg-white shadow-md rounded px-8 py-8 pt-8"
    >
      <div className="px-4 pb-4">
        <input
          type="text"
          name="search"
          id="search-github"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
          placeholder="Search GitHub Users"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
      </div>
      <button type="submit">Search</button>
      {console.log(data)}
    </form>
  );
}
