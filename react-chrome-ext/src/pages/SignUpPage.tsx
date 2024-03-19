import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SignUp from "../components/SignUp";

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSignupSuccess = () => {
    chrome.storage.session.set({ signup: true }, function () {
      console.log("User is marked as signUp in.");
      navigate("/");
    });
  };
  return (
    <>
      <Header
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/login"
      />
      <SignUp />
      {/* <button onClick={handleSignupSuccess}>Home</button> */}
    </>
  );
};

export default SignUpPage;
