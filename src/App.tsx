import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RootNavigation from "./navigation";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RootNavigation />
      </QueryClientProvider>
    </div>
  );
};

export default App;
