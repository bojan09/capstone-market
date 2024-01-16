import "./SignIn.scss";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utility/firebase/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <button onClick={logGoogleUser}>Sign in</button>
    </div>
  );
};

export default SignIn;
