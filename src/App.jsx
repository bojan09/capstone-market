import { Routes, Route } from "react-router-dom";

// components
import { Home } from "./pages";
import { Navbar } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
