import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Datepicker from "tailwind-datepicker-react";
import ReactCountryFlag from "react-country-flag";
import axios from "axios";
import { registerUser } from "../../features/auth/authActions";
import { RootState, AppDispatch } from "../../../../store";
import Error from "../Error";
import { SuccessRegisterToast } from "../Alert"; 
interface LoginFormProps {
  onStatusChange: (status: string) => void;
}
interface FormData {
  username: string;
  dob: string;
  city: string;
  ethnicity: string;
  email: string;
  password: string;
}
const SignUpForm: React.FC<LoginFormProps> = ({ onStatusChange }) => {
  const [show, setShow] = useState(false);

  const { loading, userInfo, error, success } = useSelector(
    (state: RootState) => state.auth
  );

  const { register, handleSubmit } = useForm<FormData>();
  const navigate = useNavigate();

  const submitForm = (data: FormData) => {
    data.email = data.email.toLowerCase();
    axios
      .post("http://localhost:5000/register", data)
      .then((res) => {
        SuccessRegisterToast();
      })
      .catch((err) => {
        const errStatus = err.response.data.status;
        if (errStatus == "existed_email") {
          onStatusChange("existed_email");
        }
      });
    console.log(data);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit;
    }
  };

  //calendar
  const options = {
    title: "",
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    clearBtnText: "Clear",
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
      background: "bg-[#343434] dark:bg-[#343434]",
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

  const handleChange = (selectedDate: Date) => {
    register("dob", { value: selectedDate.toLocaleDateString() });
  };
  const handleClose = (state: boolean) => {
    setShow(state);
  };

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (success) navigate("/home");
    // redirect authenticated user to profile screen
    if (userInfo) navigate("/user-profile");
  }, [navigate, userInfo, success]);

  return (
    <div className="w-full max-w-xs">
      <h1 className="text-[#3FA9F5] text-2xl font-bold mb-4">New users</h1>
      <form className="pb-8 mb-4 w-8/12" onSubmit={handleSubmit(submitForm)}>
        <div className="mb-3">
          <input
            className="bg-[#343434] shadow appearance-none rounded w-full p-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username/Tag"
            {...register("username")}
            required
          />
        </div>
        <div className="mb-3 flex justify-center items-center gap-4">
          <label className="block text-white text-sm">DOB</label>
          <Datepicker
            options={options}
            onChange={handleChange}
            show={show}
            setShow={handleClose}
          />
        </div>
        <div className="mb-3">
          <select
            id="city"
            className="bg-[#3FA9F5]  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 text-white"
            {...register("city")}
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
          {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700">
            <img src="" />
          </div> */}
        </div>
        <div className="mb-3">
          <select
            id="ethnicity"
            className="bg-[#3FA9F5] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 text-white"
            {...register("ethnicity")}
            required
          >
            <option value="" disabled selected>
              Ethnicity
            </option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="mb-3">
          <input
            className="bg-[#343434] shadow appearance-none rounded w-full p-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email address"
            {...register("email")}
            required
          />
        </div>
        <div className="mb-3 relative flex items-center justify-end">
          <input
            className="bg-[#343434] shadow appearance-none rounded w-full p-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Passwrod"
            {...register("password")}
            required
            onKeyDown={handleKeyPress}
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
      </form>
    </div>
  );
};

export default SignUpForm;
