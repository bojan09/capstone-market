// components
import { SignUpForm, SignInForm } from "../";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utility/firebase/firebase";

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <SignInForm logGoogleUser={logGoogleUser} />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
