import "./App.css";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const App = () => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <div className="App">
        <Navbar />
        <Content />
        <Footer />
      </div>
    </QueryClientProvider>
  );
};
