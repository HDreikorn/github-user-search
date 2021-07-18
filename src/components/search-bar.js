import { SearchIcon } from "@heroicons/react/outline";

export default function SearchBar() {
  return (
    <div className="bg-white flex items-center rounded-full shadow-xl">
      <input
        className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
        type="text"
        name="search"
        id="search-github"
        placeholder="Search GitHub Users"
      />

      <div className="p-4">
        <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
          <SearchIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
