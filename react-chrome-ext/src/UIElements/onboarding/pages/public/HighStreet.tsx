import React, { useEffect, useState } from "react";
import HighStreetModal from "../../components/HighStreetModal";
import { useLocation } from "react-router-dom";

const HighStreet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const Items1 = [
    {
      image: "./images/pieminister.png",
      name: "Pieminister",
      rank: "2000",
      published: "12-09-2022",
      clicks: "75",
    },
    {
      image: "./images/annie.png",
      name: "Annie's Burger Shack",
      rank: "2000",
      published: "12-09-2022",
      clicks: "300",
    },
    {
      image: "./images/truffles.png",
      name: "Truffles",
      rank: "2000",
      published: "12-09-2022",
      clicks: "100",
    },
    {
      image: "./images/pryzm.png",
      name: "Pryzm",
      rank: "2000",
      published: "12-09-2022",
      clicks: "500",
    },
    {
      image: "./images/finefish.png",
      name: "The Cod Scallops",
      rank: "2000",
      published: "12-09-2022",
      clicks: "200",
    },
    {
      image: "./images/amazon.png",
      name: "Amazon",
      rank: "2",
      published: "12-09-2022",
      clicks: "500",
    },
  ];
  const Items2 = [
    {
      image: "./images/daughuatts.png",
      name: "Doughnotts",
      rank: "2000",
      published: "12-09-2022",
      clicks: "100",
    },
    {
      image: "./images/Logo-google-icon-PNG.png",
      name: "Google",
      rank: "1",
      published: "12-09-2022",
      clicks: "10m",
    },
    {
      image: "./images/boots.png",
      name: "Boots",
      rank: "2000",
      published: "12-09-2022",
      clicks: "500",
    },
    {
      image: "./images/forest.png",
      name: "Nottingham Forest",
      rank: "2000",
      published: "12-09-2022",
      clicks: "200",
    },
    {
      image: "./images/antenna.png",
      name: "Antenna",
      rank: "2000",
      published: "12-09-2022",
      clicks: "100",
    },
    {
      image: "./images/castlerock.png",
      name: "Castle Rock",
      rank: "2000",
      published: "12-09-2022",
      clicks: "500",
    },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    console.log("high street", location.pathname);
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <div className="flex justify-center">
      <div className="container flex-col w-full">
        <div className="w-full text-white text-base gap-2 flex flex-row-reverse">
          <img src="./images/location.png" alt="" />
          <span>Local | National </span>
        </div>
        <div className="m-3 mt-4 w-full">
          {isModalOpen && <HighStreetModal closeModal={closeModal} />}
          <div className="inset-0 bg-[#424648] bg-opacity-50 border border-white rounded-xl p-4 justify-around items-center mb-4 flex flex-wrap">
            {Items1.map((item, index) => (
              <div key={index} className=" ">
                <img
                  src={item.image}
                  className="border border-white rounded-lg bg-white  cursor-pointer"
                  alt="google"
                  width={150}
                  onClick={showModal}
                />
                <div className="p-4 text-white leading-[1.2] text-base flex flex-col">
                  <span>{item.name}</span>
                  <span>Rank {item.rank}</span>
                  <span>Published {item.published}</span>
                  <span>Clicks {item.clicks}</span>
                  <a href="https://google.com" className=" text-[#3EA5EE]">
                    Visite site
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="inset-0 bg-[#424648] bg-opacity-50 border border-white rounded-xl p-4 justify-around items-center mb-4 flex flex-wrap">
            {Items2.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={item.image}
                  className="border border-white rounded-lg bg-white  cursor-pointer"
                  alt="google"
                  width={150}
                  onClick={showModal}
                />
                <div className="p-4 text-base leading-[1.2]  text-white flex flex-col">
                  <span>{item.name}</span>
                  <span>Rank {item.rank}</span>
                  <span>Published {item.published}</span>
                  <span>Clicks {item.clicks}</span>
                  <a href="https://google.com" className="text-[#3EA5EE]">
                    Visite site
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighStreet;
