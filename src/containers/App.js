import SearchBar from "../components/search-bar";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <section className="App h-screen w-full flex justify-center items-center bg-gradient-to-r from-green-400 to-blue-500">
        <SearchBar />
      </section>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default App;
