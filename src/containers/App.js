import SearchContainer from "./searchContainer";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

//React Query Config
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <section className="App h-screen w-full flex justify-center p-4 bg-gradient-to-r from-green-400 to-blue-500">
        <SearchContainer />
      </section>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default App;
