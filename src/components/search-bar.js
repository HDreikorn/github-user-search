import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <form action="" className=" bg-white shadow-md rounded px-8 py-8 pt-8">
      <div className="px-4 pb-4">
        <input
          type="text"
          name="search"
          id="search-github"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
          placeholder="Search GitHub"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </form>
  );
}
