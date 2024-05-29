import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../../store";
import { useSelector } from "react-redux";

const ManageCoupons = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const [color, setColor] = useState("");
  const backendURL = process.env.REACT_APP_API_URL;
  const userType: any = localStorage.getItem("userType");
  useEffect(() => {
    if (userType == "business") {
      setColor("bg-[#932580]");
    } else {
      setColor("bg-[#3FA9F5]");
    }
  }, [userType]);

  const items = [
    {
      image: backendURL + userInfo?.logo,
      title: "GEt 10% off your purchase",
      name: "",
      description:
        "It's not a deal if you're not getting a bargain for your troubles. Let us give you 10% off on your purchase saying thank you for your business; offer ends January 2025.",
      cost: "20 sch",
    },
    // {
    //   image: backendURL + userInfo?.logo,
    //   title: "An extra ONE us!",
    //   name:"Annie's Burger Shack",
    //   description:
    //     "dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod invidunt ut labore et dolore magna aliquyam erat, sed diam.",
    //   cost: "20 sch",
    // },
    // {
    //   image: backendURL + userInfo?.logo,
    //   title: "Free drink on us!",
    //   name:"Annie's Burger Shack",
    //   description:
    //     "dolor sit amet, consetetur sadpscing elitr, sed diam nonumy eirmod eufrat invidunt ut labore et dolore magna aliquyam erat.",
    //   cost: "20 sch",
    // },
  ];

  const navigate = useNavigate();
  return (
    <div className="flex justify-center w-full">
      <div className="container w-full">
        <div className="p-4">
          <div className="flex items-center justify-between p-4">
            <span className="text-2xl font-bold text-white">
              Coupons and offers
            </span>
            <div className="flex gap-2">
              <button
                className={`flex items-center justify-between ${color} text-white px-2 pl-4 rounded-full`}
                onClick={() => {
                  navigate("/create-coupons");
                }}
              >
                <span className="py-1 pr-2">Create coupon</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 py-1 pl-2 border-l-2 border-white border-dashed"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
              <button className={`flex items-center justify-between ${color} text-white px-2 pl-4 rounded-full`}>
                <span className="py-1 pr-2">Track</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 py-1 pl-2 border-l-2 border-white border-dashed"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className={`w-full h-full border border-solid ${color} rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% p-5 `}>
            {items &&
              items.map((item, index) => (
                <div key={index} className="mb-3">
                  <div className="flex justify-between items-center gap-5 border border-white rounded-2xl bg-[#232F3E] p-4">
                    <div className="w-[10%]  ml-auto mr-auto">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="w-[70%]">
                      <p className="mb-3 text-xl font-bold text-white">
                        {item.title}
                      </p>
                      <p className="text-sm text-white">{item.description}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3">
                      <p className="mb-1 text-xl text-white text-nowrap">
                        Cost {item.cost} |
                      </p>
                      <button
                        className={`flex items-center justify-between ${color} px-2 pl-5 rounded-full`}
                        onClick={() => {
                          navigate("/edit-coupon");
                        }}
                      >
                        <span className="py-1 pr-2 text-white">
                          Edit coupon
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 py-1 pl-2 text-white border-l-2 border-dashed"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="text-end">
                    <span className="text-sm text-white">
                      Coupon terms and conditions
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCoupons;
