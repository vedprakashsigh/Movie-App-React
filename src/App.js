import "./App.css";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};
