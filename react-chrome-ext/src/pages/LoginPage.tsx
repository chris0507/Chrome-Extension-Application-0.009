import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Login from "../components/Login";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    chrome.storage.session.set({ loggedIn: true }, function () {
      console.log("User is marked as logged in.");

      navigate("/");
    });
  };
  return (
    <>
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
      <Login />
      
      {/* <button onClick={handleLoginSuccess}>Simulate Login</button> */}
    </>
  );
};

export default LoginPage;
