import { useState, useEffect } from "react";
import { checkTokenValidity } from "../components/CheckToken";
import PopupPage from "../components/PopupPage";
import AuthedPopupPage from "../components/AuthedPopupPage";

const Home = () => {
  const [isVerifyToken, setIsVerifyToken] = useState(false);

  const openOnBoardingpage = () => {
    chrome.tabs.create({ url: chrome.runtime.getURL("onboarding.html") });
  };

  const handleClosePopup = () => {
    window.close();
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setIsVerifyToken(false);
  };

  useEffect(() => {
    const initialize = async () => {
      setIsVerifyToken(await checkTokenValidity());
    };
    initialize();
  }, []);

  return isVerifyToken ? (
    <AuthedPopupPage
      handleClosePopup={handleClosePopup}
      handleSignOut={handleSignOut}
      openOnBoardingpage={openOnBoardingpage}
    />
  ) : (
    <PopupPage
      handleClosePopup={handleClosePopup}
      openOnBoardingpage={openOnBoardingpage}
    />
  );
};

export default Home;
