import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { range } from "lodash";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { AppDispatch } from "../../../../store";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../features/auth/authSlice";

interface TooltipProps {
  show: boolean;
  content: React.ReactNode;
  x: number;
  y: number;
  row: number | null;
  col: number | null;
}
const getBackgroundColor = (row: number, col: number): string => {
  return (row + col) % 2 === 0
    ? "bg-white border-[#24A9EB]"
    : "bg-[#2BAAE1] border-[#0070B7]";
};

const API_BASE_URL = process.env.REACT_APP_API_URL;

const BlocksGrid = () => {
  const dispatch = useDispatch<AppDispatch>();
  const icons = [
    {
      row: 5,
      col: 4,
      image:
        "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png",
      key: "amazon",
    },
    {
      row: 5,
      col: 3,
      image: "./images/Logo-google-icon-PNG.png",
      key: "google",
    },
    {
      row: 3,
      col: 2,
      image: "https://cdn.worldvectorlogo.com/logos/foot-locker-logo-2.svg",
      key: "footlocker",
    },
    {
      row: 5,
      col: 5,
      image: "./images/300px-EBay_logo.svg.png",
      key: "ebay",
    },
  ];
  const BlockContainer = useRef<HTMLDivElement>(null);
  const [blockSize, setBlockSize] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const { userInfo } = useSelector((state: RootState) => state.auth);

  const [dropdown, setDropdown] = useState<{ x: number; y: number, row:number, col:number } | null>(
    null
  );
  const checkIcons = (row: number, col: number) => {
    for (let icon of icons) {
      if (icon.row === row && icon.col === col) {
        return icon;
      }
    }
    return null;
  };

  const handleRightClick = (e: React.MouseEvent, row:number, col:number) => {
    e.preventDefault();
    setDropdown({ x: e.clientX, y: e.clientY, row:row, col:col });
  };

  const handleRemoveURL = (row: number, col: number) => {
    const email = localStorage.getItem("email");
    axios
      .post(`${API_BASE_URL}removeURL`, {
        email,
        row,
        col,
      })
      .then((res) => {
        console.log("res", res);
        setDropdown(null)
        dispatch(setUserInfo(res.data.data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  const handleClickTile = (url: string) => {
    //open new tab with url
    if (url) {
      window.open(url, "_blank");
    }
  };

  const checkUrl = (row: number, col: number) => {
    if (userInfo?.urls)
      for (let index = 0; index < userInfo.urls.length; index++) {
        const url = userInfo.urls[index];
        if (url.row === row && url.col === col) {
          console.log("date:", url.date);
          return url;
        }
      }
    return false;
  };

  const handleClick = (row: number, col: number, e: React.MouseEvent) => {
    const icon = checkIcons(row, col);
    if (icon) {
      navigate("/explore-coupons");
    }
  };

  const [url, setUrl] = useState<string>("");
  const [urls, setUrls] = useState<any[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent, row: number, col: number) => {
    if (e.key === "Enter") {
      console.log("enter pressed:", url, row, col);
      const email = localStorage.getItem("email");
      axios
        .post(`${API_BASE_URL}addTile`, {
          email,
          url,
          row,
          col,
        })
        .then((res) => {
          console.log("res", res);
          dispatch(setUserInfo(res.data.data));
        })
        .catch((err) => {
          console.log("err", err);
        });

      (e.currentTarget as HTMLInputElement).value = "";
    }
  };
  const handleChangeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdown(null);
      }
    };

    // Calculate block size
    const updateBlockSize = () => {
      if (BlockContainer.current) {
        if (BlockContainer.current.clientWidth < window.innerHeight) {
          const size = Math.floor(
            (BlockContainer.current.clientWidth - 4 * 7 - 40) / 8
          );
          setBlockSize(size);
        } else {
          const size = Math.floor((window.innerHeight - 4 * 7 - 140) / 8);
          setBlockSize(size);
        }
      }
      // Since we want to fit 8 blocks in the height, each block should take up 1/8 of the available viewport height minus the gaps
      // const size = Math.floor((window.innerHeight - 7 * 5 - 40) / 8); // For 7 gaps of 5px each
      // console.log(size);
      // setBlockSize(size);
    };

    // Update blockSize on mount and when window resizes
    window.addEventListener("resize", updateBlockSize);
    updateBlockSize(); // Initial calculation
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("resize", updateBlockSize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`flex-auto w-full flex xl:w-2/3 h-fit xl:h-screen justify-center items-center `}
      ref={BlockContainer}
    >
      <div className="w-fit   p-5 bg-[#1D3D4A] rounded-lg">
        <div className="grid grid-cols-8 gap-[5px]">
          {range(8).map((row) =>
            range(8).map((col) => {
              const icon = checkIcons(row, col);
              const blockClasses = `border-2 flex items-center rounded-lg cursor-pointer ${getBackgroundColor(
                row,
                col
              )}`;

              if (icon) {
                return (
                  <div
                    key={`${row}-${col}`}
                    className={`${blockClasses} hover:bg-[#FFF200] hover:border-[#F9AA16]`}
                    style={{
                      width: `${blockSize}px`,
                      height: `${blockSize}px`,
                    }} // Set both width and height to blockSize
                    onClick={(e) => handleClick(row, col, e)}
                  >
                    {icon && (
                      <img
                        src={icon.image}
                        className="rounded-lg"
                        alt={icon.key}
                      />
                    )}
                  </div>
                );
              } else
                return (
                  <div
                    key={`${row}-${col}`}
                    className={blockClasses}
                    style={{
                      width: `${blockSize}px`,
                      height: `${blockSize}px`,
                    }} // Set both width and height to blockSize
                    onClick={(e) => handleClick(row, col, e)}
                  >
                    {(() => {
                      const url = checkUrl(row, col);
                      if (url !== false) {
                        return (
                          <div
                            onContextMenu={(e) => handleRightClick(e, row, col)}
                            onClick={() => handleClickTile(url.url)}
                            className="flex flex-col items-center justify-center w-full"
                          >
                            <span className="text-lg text-center">
                              Tile {row * 8 + col + 1}
                            </span>
                            <span className="text-center text-nowrap">
                              {new Date(url.date).toISOString().split("T")[0]}
                            </span>
                          </div>
                        );
                      } else {
                        return (
                          <input
                            onChange={(e) => handleChangeUrl(e)}
                            onKeyDown={(e) => handleKeyDown(e, row, col)}
                            type="text"
                            className="w-full bg-transparent border-none active:border-none focus:border-none"
                          />
                        );
                      }
                    })()}
                  </div>
                );
            })
          )}
          {dropdown && (
            <div
              ref={dropdownRef}
              style={{ position: "fixed", top: dropdown.y, left: dropdown.x }}
              className="px-2 py-1 bg-gray-300 rounded cursor-pointer hover:bg-gray-400"
              onClick={() => handleRemoveURL(dropdown.row, dropdown.col)}
            >
              Remove URL
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlocksGrid;
