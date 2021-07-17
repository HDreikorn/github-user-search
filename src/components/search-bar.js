export default function SearchBar({ searchString, setSearchString }) {
  return (
    <input
      type="text"
      name="search"
      id="search-github"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
      placeholder="Search GitHub Users"
      value={searchString}
      onChange={(e) => setSearchString(e.target.value)}
    />
  );
}
