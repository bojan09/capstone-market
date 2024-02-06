import { Routes, Route } from "react-router-dom";

// components
import { Home } from "./pages";
import { Navigation, Authentication, Shop } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
