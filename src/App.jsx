import { Routes, Route } from "react-router-dom";

// components
import { Home, SignIn } from "./pages";
import { Navbar } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
