import { Routes, Route } from "react-router-dom";

// components
import { Home } from "./pages";
import { Navbar, Authentication } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="authentication" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
