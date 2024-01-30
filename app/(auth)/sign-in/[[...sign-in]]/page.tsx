import React from "react";
import { SignIn as SignInClerk } from "@clerk/nextjs";

const SignIn = () => {
  return (
    <div>
      <SignInClerk />
    </div>
  );
};

export default SignIn;
