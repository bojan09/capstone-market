import "./Authentication.scss";

// components
import { SignUpForm, SignInForm } from "../";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
