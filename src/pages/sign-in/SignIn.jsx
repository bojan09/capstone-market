import "./SignIn.scss";

import { signInWithGooglePopup } from "../../utility/firebase/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <button onClick={logGoogleUser}>Sign in</button>
    </div>
  );
};

export default SignIn;
