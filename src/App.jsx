import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// utilities
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utility/firebase/firebase";

// redux
import { setCurrentUser } from "./store/user/userAction";
import { useDispatch } from "react-redux";

// components
import { Home, Authentication, Checkout, Shop } from "./pages";
import { Navigation } from "./components";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
