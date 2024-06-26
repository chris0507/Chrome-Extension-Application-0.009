import { useState, useEffect, CSSProperties } from "react";
import { checkTokenValidity } from "../components/CheckToken";
import PopupPage from "../components/PopupPage";
import AuthedPopupPage from "../components/AuthedPopupPage";
import { CircleLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Home = () => {
  const [isVerifyToken, setIsVerifyToken] = useState<boolean | null>(null);

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
    setIsVerifyToken(false);
    console.log("token1", isVerifyToken);
    const initialize = async () => {
      setIsVerifyToken(await checkTokenValidity());
      console.log("token", isVerifyToken)
    };
    initialize();
  }, []);

  if (isVerifyToken === null) {
    return (
      <div className="w-full h-[32rem] border border-solid border-[#08A9D7] rounded-t-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% flex justify-center items-center">
        <CircleLoader
          color={"#08A9D7"}
          loading={true}
          size={70}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
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
