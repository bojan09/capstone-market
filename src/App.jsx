import { Routes, Route } from "react-router-dom";

// components
import { Home } from "./pages";
import { Navbar } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
