import React from "react";
import "./authentication.styles.scss";

import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

export default function Authentication() {  
  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
