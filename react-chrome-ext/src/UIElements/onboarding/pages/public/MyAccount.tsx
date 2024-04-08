import React, { useState } from "react";
import Datepicker from "tailwind-datepicker-react";
import { Progress } from "@material-tailwind/react";
import { PieChart } from "react-minimal-pie-chart";
import Dropdown from "../../components/public/Dropdown";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
  //calendar
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const options = {
    title: "",
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    clearBtnText: "Clear",
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
      background: "bg-white dark:bg-[#343434]",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "",
      disabledText: "bg-red-500",
      input: "bg-[#343434] dark:bg-[#343434] rounded-full text-white",
      inputIcon: "",
      selected: "",
    },
    icons: {
      prev: () => (
        <span>
          <svg
            className="w-5 h-5 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
            />
          </svg>
        </span>
      ),
      next: () => (
        <span>
          <svg
            className="w-5 h-5 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
            />
          </svg>
        </span>
      ),
    },
    datepickerClassNames: "top-12",
    defaultDate: new Date("2024-01-01"),
    language: "en",
    disabledDates: [],
    weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    inputNameProp: "date",
    inputIdProp: "date",
    inputPlaceholderProp: "Select Date",
  };

  const handleChangeDob = (selectedDate: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    const selectedDateString = selectedDate.toLocaleDateString(
      "en-US",
      options
    );
    console.log(selectedDateString);
    // setValue("dob", selectedDateString, { shouldValidate: true });
  };

  const handleClose = (state: boolean) => {
    setShow(state);
  };

  const handleSelect = (value: string) => {
    //   setValue("ethnicity", value, { shouldValidate: true });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-[70%] h-full border border-solid border-[#2F2F2F] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% py-10 m-5">
        <div className="flex justify-around gap-5 ">
          <div className="w-full max-w-xs">
            <p className="text-[#3FA9F5] text-2xl mb-4">My account</p>
            <form className="pb-8 mb-4 w-8/12">
              <div className="mb-3">
                <input
                  className="bg-[#343434] shadow appearance-none rounded w-full p-2 text-white leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username/Tag"
                  required
                />
              </div>
              <div className="mb-3">
                <div className="flex items-center justify-end">
                  <input
                    className="bg-[#343434] shadow appearance-none rounded w-full p-2 text-white leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="text"
                    placeholder="Upload avatar"
                    required
                  />
                  <div className="absolute pr-2 cursor-pointer">
                    <button type="submit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 text-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mb-3 flex justify-center items-center gap-4">
                <label className="block text-white text-sm">DOB</label>
                <Datepicker
                  options={options}
                  onChange={handleChangeDob}
                  show={show}
                  setShow={handleClose}
                />
              </div>
              <div className="mb-3">
                <select
                  id="city"
                  className="bg-[#3FA9F5]  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 text-white"
                  required
                >
                  <option value="" disabled selected>
                    City
                  </option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div className="mb-3">
                <Dropdown onSelect={handleSelect} />
              </div>
              <div className="mb-3">
                <input
                  className="bg-[#343434] shadow appearance-none rounded w-full p-2 text-white leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email address"
                  required
                />
              </div>
              <div className="mb-3">
                <div className="flex items-center justify-end">
                  <input
                    className="bg-[#343434] shadow appearance-none rounded w-full p-2 text-white leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Passwrod"
                    required
                  />
                  <div className="absolute pr-2 cursor-pointer">
                    <button type="submit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 text-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <button className="flex items-center justify-between bg-[#43A9F5] text-white px-4 rounded-full">
                <span className="py-1 pr-2">GDPR settings</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 border-l-2 border-dashed border-white py-1 pl-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </button>
            </form>
          </div>
          <div className="w-full max-w-xs">
            <p className="text-[#3FA9F5] text-2xl mb-2">My coupons</p>
            <div className="flex justify-between mb-4">
              <button className="flex items-center justify-between bg-[#43A9F5] text-white px-4 rounded-full" onClick={() => navigate("/my-coupons")}>
                <span className="py-1 pr-2">My coupons</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 border-l-2 border-dashed border-white py-1 pl-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                  />
                </svg>
              </button>
              <button className="flex items-center justify-between bg-[#43A9F5] text-white px-4 rounded-full" onClick={() => navigate("/explore-coupons")}>
                <span className="py-1 pr-2">Expired coupons</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 border-l-2 border-dashed border-white py-1 pl-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-3">
              <span className="text-[#3FA9F5] text-2xl">Wallet</span>
              <div className="border border-solid border-[#2F2F2F] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% mt-2 p-3 px-5">
                <div className="border border-solid border-[#2BAAE1] bg-white rounded-2xl p-4">
                  <div className="flex gap-2">
                    <span className="text-lg font-bold">200 sch |</span>
                    <span className="flex items-center">Max 500</span>
                  </div>
                  <div className="bg-black rounded-full mt-1 p-5 w-full">
                    <Progress
                      value={25}
                      variant="filled"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                      color="red"
                      className="h-[10px] bg-[#434343]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <span className="text-[#3FA9F5] text-2xl">Stats overview</span>
              <div className="border border-solid border-[#2F2F2F] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% mt-2 p-3 px-5 flex justify-between items-center">
                <div className="text-center">
                  <PieChart
                    data={[
                      { title: "One", value: 10, color: "#E38627" },
                      { title: "Two", value: 15, color: "#C13C37" },
                      { title: "Three", value: 20, color: "#6A2135" },
                    ]}
                    style={{ height: "90px" }}
                  />
                  <span className="text-white">Market share</span>
                </div>
                <div className="text-center">
                  <PieChart
                    data={[
                      { title: "One", value: 10, color: "#E38627" },
                      { title: "Two", value: 15, color: "#C13C37" },
                      { title: "Three", value: 20, color: "#6A2135" },
                    ]}
                    style={{ height: "90px" }}
                  />
                  <span className="text-white">Market share</span>
                </div>
                <div className="text-center">
                  <PieChart
                    data={[
                      { title: "One", value: 10, color: "#E38627" },
                      { title: "Two", value: 15, color: "#C13C37" },
                      { title: "Three", value: 20, color: "#6A2135" },
                    ]}
                    style={{ height: "90px" }}
                  />
                  <span className="text-white">Market share</span>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <span className="text-[#3FA9F5] text-2xl">Users stats</span>
              <div className="border border-solid border-[#2F2F2F] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% mt-2 p-3 px-5 flex flex-col justify-center items-center text-white">
                <span className="text-4xl ">118,890</span>
                <span className="text-sm">users registered</span>
              </div>
            </div>
            <div className="mt-3">
              <span className="text-[#3FA9F5] text-2xl">Buisness stats</span>
              <div className="border border-solid border-[#2F2F2F] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% mt-2 p-3 px-5 flex flex-col justify-center items-center text-white">
                <span className="text-4xl ">383,210</span>
                <span className="text-sm">sch | generated by businesses</span>
                <span className="">(100 sch| = £1)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
