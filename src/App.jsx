import { Routes, Route } from "react-router-dom";

// components
import { Home } from "./pages";
import { Navbar, SignInForm } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignInForm />} />
      </Route>
    </Routes>
  );
};

export default App;
