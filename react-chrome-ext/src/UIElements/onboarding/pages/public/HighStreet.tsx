import React, { useEffect, useState } from "react";
import HighStreetModal from "../../components/HighStreetModal";
import { useLocation } from "react-router-dom";

const HighStreet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const Items1 = [
    {
      image: "./images/castlerock.png",
      name: "Castle rock brewery",
      rank: "2000",
      published: "12-09-2022",
      clicks: "75",
      url:'https://www.castlerockbrewery.co.uk/'
    },
    {
      image: "./images/logos/Antenna nottingham logo.png",
      name: "Antenna",
      rank: "2000",
      published: "12-09-2022",
      clicks: "300",
      url:'https://antenna.uk.com'
    },
    {
      image: "./images/forest.png",
      name: "Nottingham Forest",
      rank: "2000",
      published: "12-09-2022",
      clicks: "100",
      url:'https://www.nottinghamforest.co.uk'
    },
    {
      image: "./images/logos/Boots logo.png",
      name: "Boots or (Experian/Capital one)",
      rank: "2000",
      published: "12-09-2022",
      clicks: "500",
      url:'https://www.boots-uk.com/about-boots-uk/company-information/boots-in-nottingham/'
    },
    {
      image: "./images/Logo-google-icon-PNG.png",
      name: "Google",
      rank: "2000",
      published: "12-09-2022",
      clicks: "200",
      url:'https://www.google.co.uk'
    },
    {
      image: "./images/daughuatts.png",
      name: "Doughnotts",
      rank: "2",
      published: "12-09-2022",
      clicks: "500",
      url:'https://www.xn--doughnottsoicial-8he.com/'
    },
  ];
  const Items2 = [
    {
      image: "./images/logos/Amazon logo.jpg",
      name: "Amazon",
      rank: "2000",
      published: "12-09-2022",
      clicks: "100",
      url:'https://amazon.co.uk'
    },
    {
      image: "./images/finefish.png",
      name: "The cod Scallops",
      rank: "1",
      published: "12-09-2022",
      clicks: "10m",
      url:'https://www.codsscallops.com/'
    },
    {
      image: "./images/logos/Bunk nottingham logo.png",
      name: "Bunk",
      rank: "2000",
      published: "12-09-2022",
      clicks: "500",
      url:'https://www.bunkwings.com/'
    },
    {
      image: "./images/logos/Nottingham College.jpeg",
      name: "Nottingham College",
      rank: "2000",
      published: "12-09-2022",
      clicks: "200",
      url:'https://www.nottinghamcollege.ac.uk/'
    },
    {
      image: "./images/logos/piemininister logo.png",
      name: "Peiminster",
      rank: "2000",
      published: "12-09-2022",
      clicks: "100",
      url:'https://pieminister.co.uk/'
    },
    {
      image: "./images/annie.png",
      name: "Demo Business Annies burger shack",
      rank: "2000",
      published: "12-09-2022",
      clicks: "500",
      url:'https://anniesburgershack.com/gallery'
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
      <div className="flex flex-col items-center w-full">
        <div className="container flex flex-row-reverse justify-end w-full gap-2 text-base text-white" style={{justifyContent: 'end'}}>
          <img src="./images/location.png" alt="" />
          <span>Local | National </span>
        </div>
        <div className="container flex flex-col items-center m-3 mt-4 w-fit">
          {isModalOpen && <HighStreetModal closeModal={closeModal} />}
          <div className="inset-0 bg-[#424648] bg-opacity-50 border gap-4 border-white rounded-xl p-4 justify-around items-center mb-4 grid grid-cols-2 lg:grid-cols-6 w-full sm:grid-cols-3">
            {Items1.map((item, index) => (
              <div key={index} className="flex flex-col items-center ">
                <img
                  src={item.image}
                  className="w-full bg-white border border-white rounded-lg cursor-pointer"
                  alt="google"
                  width={150}
                  onClick={()=>{
                    if(item.name === "Demo Business Annies burger shack")
                      showModal()
                  }}
                />
                <div className="p-4 text-white leading-[1.2] text-base flex flex-col">
                  <span>{item.name}</span>
                  <span>Rank {item.rank}</span>
                  <span>Published {item.published}</span>
                  <span>Clicks {item.clicks}</span>
                  <a href={item.url} className=" text-[#3EA5EE]">
                    Visite site
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="inset-0 bg-[#424648] bg-opacity-50 gap-4 border  border-white rounded-xl p-4 justify-around items-center mb-4 grid grid-cols-2 lg:grid-cols-6 w-full sm:grid-cols-3">
            {Items2.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={item.image}
                  className="w-full bg-white border border-white rounded-lg cursor-pointer"
                  alt="google"
                  width={150}
                  onClick={()=>{
                    if(item.name === "Demo Business Annies burger shack")
                      showModal()
                  }}
                />
                <div className="p-4 text-base leading-[1.2]  text-white flex flex-col">
                  <span>{item.name}</span>
                  <span>Rank {item.rank}</span>
                  <span>Published {item.published}</span>
                  <span>Clicks {item.clicks}</span>
                  <a href={item.url} className="text-[#3EA5EE]">
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
