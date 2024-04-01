import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Datepicker from "tailwind-datepicker-react";
import axios from "axios";
import { Formik } from "formik";
import { RootState } from "../../../../store";
import { ExistEmailToast, SuccessRegisterToast } from "../Alert";
import Dropdown from "./Dropdown";
interface FormData {
  username: string;
  dob: string;
  city: string;
  ethnicity: string;
  email: string;
  password: string;
}
interface SignUpFormProps {
  setLoading: (status: boolean) => void;
}

interface ErrorObject {
  email?: string;
  password?: string;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ setLoading }) => {
  const API_BASE_URL = process.env.REACT_APP_API_URL;
  const { register, setValue, handleSubmit, getValues, watch } =
    useForm<FormData>();
  const [submitErrors, setSubmitErrors] = useState<FormData>();
  const [isStrongPassword, setIsStrongPassword] = useState(false);

  const submitForm = (data: FormData) => {
    console.log("getValues", getValues());
    if (!validate()) return;
    setLoading(true);
    data.email = data.email.toLowerCase();
    axios
      .post(`${API_BASE_URL}register`, data)
      .then((res) => {
        SuccessRegisterToast();
        setLoading(false);
      })
      .catch((err) => {
        const errStatus = err.response.data.status;
        if (errStatus == "existed_email") {
          ExistEmailToast();
        }
        setLoading(false);
      });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(submitForm)();
    }
  };

  const handleSelect = (value: string) => {
    setValue("ethnicity", value, { shouldValidate: true });
  };

  //calendar
  const [show, setShow] = useState(false);

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
    setValue("dob", selectedDateString, { shouldValidate: true });
  };

  const handleClose = (state: boolean) => {
    setShow(state);
  };

  // Validation checking
  const initialValues = {
    username: "",
    dob: "",
    city: "",
    ethnicity: "",
    email: "",
    password: "",
  };

  const validate = () => {
    const data: FormData = getValues();
    let errors: FormData = initialValues;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const hasUpperCase = /[A-Z]/.test(data.password);
    const hasLowerCase = /[a-z]/.test(data.password);
    const hasDigit = /\d/.test(data.password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(data.password);
    const isLongEnough = data.password.length >= 8;

    setIsStrongPassword(
      hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar && isLongEnough
    );
    console.log("isStrongPassword", isStrongPassword);

    if (!data.username) {
      errors.username = "Username Empty Error";
    }
    if (!data.email) {
      errors.email = "Email Empty Error";
    } else if (!emailRegex.test(data.email)) {
      errors.email = "Email is not exactly";
    }
    if (!data.password) {
      errors.password = "Password Empty Error";
    }
    if (!isStrongPassword) {
      errors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.";
    }
    setSubmitErrors(errors);
    if (
      errors.username ||
      errors.email ||
      errors.password ||
      errors.city ||
      errors.dob ||
      errors.ethnicity
    ) {
      return 0;
    }
    return 1;
  };

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
          {submitErrors?.username && watch("username") === "" && (
            <p className="text-red-500">{submitErrors?.username}</p>
          )}
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
          <Dropdown onSelect={handleSelect} />
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
          {submitErrors?.email && watch("email") === "" && (
            <p className="text-red-500">{submitErrors?.email}</p>
          )}
        </div>
        <div className="mb-3">
          <div className="flex items-center justify-end">
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
          {submitErrors?.password && watch("password") === "" && (
            <p className="text-red-500">{submitErrors?.password}</p>
          )}
        </div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            // checked={isTermsAccepted}
            // onChange={handleCheckboxChange}
            className="form-checkbox h-4 w-4 text-indigo-600"
          />
          <span className="text-sm text-gray-700">
            By signing up, you agree to the
            <a href="#" className="text-blue-500">
              Terms and Conditions and Privacy Policy
            </a>
          </span>
        </label>
      </form>
    </div>
  );
};

export default SignUpForm;
