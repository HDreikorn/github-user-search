import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import SearchBar from "../components/search-bar";
import { searchQueryRequest } from "../gqlRequests";
import UserList from "../components/userList";
import PaginationContainer from "../components/paginationContainer";

export default function SearchContainer() {
  const [searchString, setSearchString] = useState("");
  const [changePage, setChangePage] = useState([]);
  const { data } = useQuery(
    ["users", searchString, changePage],
    async () => searchQueryRequest(searchString, changePage),
    {
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    console.log("data change", data?.search.pageInfo);
  }, [data]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchString(e.target.elements.search.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <SearchBar />
      </form>
      <h6>{`Total Users Found: ${data?.search.userCount}`}</h6>
      <UserList data={data} />
      <PaginationContainer
        pageInfo={data?.search.pageInfo}
        setChangePage={setChangePage}
      />
    </div>
  );
}
