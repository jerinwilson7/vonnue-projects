import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePark } from "./contexts/MainContext";
import { DashboardPage } from "./pages/DashboardPage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const { isLoading } = usePark();
  const queryClient = new QueryClient({
    defaultOptions:{
      queries:{
        staleTime:60 * 1000
      }
    }
  })

  return (

    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

    <div className="bg-main-bg w-screen h-full flex flex-col overscroll-y-auto">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <DashboardPage />
      )}
    </div>
    </QueryClientProvider>
  );
}

export default App;
 