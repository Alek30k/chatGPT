import { SignIn } from "@clerk/clerk-react";
import "./signInPage.css";

const SignInPage = () => {
  return (
    <div className="signinpage">
      <SignIn path="/sign-in" />
    </div>
  );
};

export default SignInPage;
