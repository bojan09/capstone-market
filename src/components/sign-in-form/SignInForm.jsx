import "./SignInForm.scss";

const SignInForm = ({ logGoogleUser }) => {
  return (
    <div>
      <button onClick={logGoogleUser}>Sign in</button>
    </div>
  );
};

export default SignInForm;
