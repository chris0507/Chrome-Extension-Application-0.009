import React, { useEffect, useState } from "react";
import HighStreetModal from "../../components/HighStreetModal";
import { useLocation } from "react-router-dom";

const HighStreet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

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
    <div className="m-3 mt-4">
      {isModalOpen && <HighStreetModal closeModal={closeModal} />}
      <div className="inset-0 bg-[#424648] bg-opacity-50 border border-white rounded-xl p-4 flex justify-between items-center mb-4">
        <div>
          <img
            src="images/google.svg"
            className="border border-white rounded-lg bg-white p-4 cursor-pointer"
            alt="google"
            width={150}
            onClick={showModal}
          />
          <div className="p-4 text-white flex flex-col">
            <span>Google</span>
            <span>Rank 1</span>
            <span>Published 06-07-2022</span>
            <span>Clicks 10m</span>
            <a href="https://google.com">Visite site</a>
          </div>
        </div>
        <div>
          <img
            src="images/google.svg"
            className="border border-white rounded-lg bg-white p-4"
            alt="google"
            width={150}
          />
          <div className="p-4 text-white flex flex-col">
            <span>Google</span>
            <span>Rank 1</span>
            <span>Published 06-07-2022</span>
            <span>Clicks 10m</span>
            <a href="https://google.com">Visite site</a>
          </div>
        </div>
        <div>
          <img
            src="images/google.svg"
            className="border border-white rounded-lg bg-white p-4"
            alt="google"
            width={150}
          />
          <div className="p-4 text-white flex flex-col">
            <span>Google</span>
            <span>Rank 1</span>
            <span>Published 06-07-2022</span>
            <span>Clicks 10m</span>
            <a href="https://google.com">Visite site</a>
          </div>
        </div>
        <div>
          <img
            src="images/google.svg"
            className="border border-white rounded-lg bg-white p-4"
            alt="google"
            width={150}
          />
          <div className="p-4 text-white flex flex-col">
            <span>Google</span>
            <span>Rank 1</span>
            <span>Published 06-07-2022</span>
            <span>Clicks 10m</span>
            <a href="https://google.com">Visite site</a>
          </div>
        </div>
        <div>
          <img
            src="images/google.svg"
            className="border border-white rounded-lg bg-white p-4"
            alt="google"
            width={150}
          />
          <div className="p-4 text-white flex flex-col">
            <span>Google</span>
            <span>Rank 1</span>
            <span>Published 06-07-2022</span>
            <span>Clicks 10m</span>
            <a href="https://google.com">Visite site</a>
          </div>
        </div>
        <div>
          <img
            src="images/google.svg"
            className="border border-white rounded-lg bg-white p-4"
            alt="google"
            width={150}
          />
          <div className="p-4 text-white flex flex-col">
            <span>Google</span>
            <span>Rank 1</span>
            <span>Published 06-07-2022</span>
            <span>Clicks 10m</span>
            <a href="https://google.com">Visite site</a>
          </div>
        </div>
        <div>
          <img
            src="images/google.svg"
            className="border border-white rounded-lg bg-white p-4"
            alt="google"
            width={150}
          />
          <div className="p-4 text-white flex flex-col">
            <span>Google</span>
            <span>Rank 1</span>
            <span>Published 06-07-2022</span>
            <span>Clicks 10m</span>
            <a href="https://google.com">Visite site</a>
          </div>
        </div>
      </div>
      <div className="inset-0 bg-[#424648] bg-opacity-50 border border-white rounded-xl p-4 flex justify-between items-center">
        <div>
          <img
            src="images/google.svg"
            className="border border-white rounded-lg bg-white p-4"
            alt="google"
            width={150}
          />
          <div className="p-4 text-white flex flex-col">
            <span>Google</span>
            <span>Rank 1</span>
            <span>Published 06-07-2022</span>
            <span>Clicks 10m</span>
            <a href="https://google.com">Visite site</a>
          </div>
        </div>
        <div>
          <img
            src="images/google.svg"
            className="border border-white rounded-lg bg-white p-4"
            alt="google"
            width={150}
          />
          <div className="p-4 text-white flex flex-col">
            <span>Google</span>
            <span>Rank 1</span>
            <span>Published 06-07-2022</span>
            <span>Clicks 10m</span>
            <a href="https://google.com">Visite site</a>
          </div>
        </div>
        <div>
          <img
            src="images/google.svg"
            className="border border-white rounded-lg bg-white p-4"
            alt="google"
            width={150}
          />
          <div className="p-4 text-white flex flex-col">
            <span>Google</span>
            <span>Rank 1</span>
            <span>Published 06-07-2022</span>
            <span>Clicks 10m</span>
            <a href="https://google.com">Visite site</a>
          </div>
        </div>
        <div>
          <img
            src="images/google.svg"
            className="border border-white rounded-lg bg-white p-4"
            alt="google"
            width={150}
          />
          <div className="p-4 text-white flex flex-col">
            <span>Google</span>
            <span>Rank 1</span>
            <span>Published 06-07-2022</span>
            <span>Clicks 10m</span>
            <a href="https://google.com">Visite site</a>
          </div>
        </div>
        <div>
          <img
            src="images/google.svg"
            className="border border-white rounded-lg bg-white p-4"
            alt="google"
            width={150}
          />
          <div className="p-4 text-white flex flex-col">
            <span>Google</span>
            <span>Rank 1</span>
            <span>Published 06-07-2022</span>
            <span>Clicks 10m</span>
            <a href="https://google.com">Visite site</a>
          </div>
        </div>
        <div>
          <img
            src="images/google.svg"
            className="border border-white rounded-lg bg-white p-4"
            alt="google"
            width={150}
          />
          <div className="p-4 text-white flex flex-col">
            <span>Google</span>
            <span>Rank 1</span>
            <span>Published 06-07-2022</span>
            <span>Clicks 10m</span>
            <a href="https://google.com">Visite site</a>
          </div>
        </div>
        <div>
          <img
            src="images/google.svg"
            className="border border-white rounded-lg bg-white p-4"
            alt="google"
            width={150}
          />
          <div className="p-4 text-white flex flex-col">
            <span>Google</span>
            <span>Rank 1</span>
            <span>Published 06-07-2022</span>
            <span>Clicks 10m</span>
            <a href="https://google.com">Visite site</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighStreet;
