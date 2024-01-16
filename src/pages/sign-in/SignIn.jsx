import "./SignIn.scss";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utility/firebase/firebase";

// components
import { SignUpForm } from "../../components";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div style={{ display: "flex", gap: "2rem", margin: "2rem" }}>
      <button style={{ padding: ".5rem" }} onClick={logGoogleUser}>
        Sign in
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
