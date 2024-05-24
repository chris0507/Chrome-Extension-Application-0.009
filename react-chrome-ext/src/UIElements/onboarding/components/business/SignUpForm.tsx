import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import env from "react-dotenv";
import { ExistEmailToast, SuccessLoginToast } from "../Alert";
import Dropdown from "../public/Dropdown";
interface FormData {
  brandName: string;
  city: string;
  country: string;
  CEOname: string;
  CEOemail: string;
  companyID: string;
  businessURL: string;
  logo: string;
  email: string;
  password: string;
}

interface SignUpFormProps {
  setLoading: (status: boolean) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ setLoading }) => {
  const API_BASE_URL = process.env.REACT_APP_API_URL;
  const { register, setValue, handleSubmit, getValues, watch } =
    useForm<FormData>();
  const [submitErrors, setSubmitErrors] = useState<FormData>();
  const navigate = useNavigate();

  const submitForm = (data: FormData) => {
    if (!validate()) return;
    setLoading(true);

    data.email = data.email.toLowerCase();
    data.logo = data.logo[0];
    console.log('data', data);
    axios
      .post(`${API_BASE_URL}business/register`, data,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      
      })
      .then((res) => {
        localStorage.setItem("verifyEmail", "true");
        navigate("/verify-email", {
          state: { email: getValues("email"), type: "business" },
        });
        setLoading(false);
      })
      .catch((err) => {
        const errStatus = err.response.data.status;
        if (errStatus == "existed_email") {
          ExistEmailToast();
        }
      });
    console.log(data);
  };

  const handleSelect = (value: string) => {
    setValue("country", value, { shouldValidate: true });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(submitForm)();
    }
  };

  // Validation checking
  const initialValues = {
    brandName: "",
    city: "",
    country: "",
    CEOname: "",
    CEOemail: "",
    companyID: "",
    businessURL: "",
    logo: "",
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

    if (!data.brandName) {
      errors.brandName = "BrandName Empty Error";
    }
    if (!data.CEOname) {
      errors.CEOname = "CEOname Empty Error";
    }
    if (!data.CEOemail) {
      errors.CEOemail = "CEOemail Empty Error";
    } else if (!emailRegex.test(data.CEOemail)) {
      errors.CEOemail = "CEOemail is not exactly";
    }
    if (!data.companyID) {
      errors.companyID = "CompanyID Empty Error";
    }
    if (!data.businessURL) {
      errors.businessURL = "BusinessURL Empty Error";
    }
    if (!data.logo) {
      errors.logo = "Company Logo Empty Error";
    }
    if (!data.email) {
      errors.email = "Email Empty Error";
    } else if (!emailRegex.test(data.email)) {
      errors.email = "Email is not exactly";
    }
    if (!data.password) {
      errors.password = "Password Empty Error";
    } else if (
      !(
        hasUpperCase &&
        hasLowerCase &&
        hasDigit &&
        hasSpecialChar &&
        isLongEnough
      )
    ) {
      errors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.";
    }
    setSubmitErrors(errors);
    if (
      errors.brandName ||
      errors.CEOname ||
      errors.CEOemail ||
      errors.companyID ||
      errors.businessURL ||
      errors.logo ||
      errors.email ||
      errors.password ||
      errors.city ||
      errors.country
    ) {
      return 0;
    }
    return 1;
  };

  return (
    <div className="flex justify-center w-full">
      <form
        className="flex flex-col justify-center mb-4 "
        onSubmit={handleSubmit(submitForm)}
      >
        <h1 className="text-[#932580] text-2xl font-bold mb-4">
          New Business users
        </h1>
        <div className="flex flex-col justify-center w-full mb-3 sm:flex-row sm:gap-5">
          <div className="w-full">
            <div className="mb-3">
              <input
                className="bg-[#343434] shadow appearance-none rounded w-full p-2 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="brandName"
                type="text"
                placeholder="Business brand name"
                {...register("brandName")}
                required
              />
              {submitErrors?.brandName && watch("brandName") === "" && (
                <p className="text-red-500">{submitErrors?.brandName}</p>
              )}
            </div>
            <div className="mb-3">
              <select
                id="city"
                className="bg-[#932580] text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-white pr-10"
                {...register("city")}
                required
              >
                <option value="" disabled selected>
                  City
                </option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="mb-3">
              <select
                id="country"
                className="bg-[#932580] text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-white pr-10"
                {...register("country")}
                required
              >
                <option value="" disabled selected>
                  Country
                </option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>

            <div className="mb-3">
              <input
                className="bg-[#343434] shadow appearance-none rounded w-full p-2 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="CEOname"
                type="text"
                placeholder="CEO/Manager Name"
                {...register("CEOname")}
                required
              />
              {submitErrors?.CEOname && watch("CEOname") === "" && (
                <p className="text-red-500">{submitErrors?.CEOname}</p>
              )}
            </div>
            <div className="mb-3">
              <input
                className="bg-[#343434] shadow appearance-none rounded w-full p-2 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="CEOemail"
                type="email"
                placeholder="CEO/Manager Email"
                {...register("CEOemail")}
                required
              />
              {submitErrors?.CEOemail && watch("CEOemail") === "" && (
                <p className="text-red-500">{submitErrors?.CEOemail}</p>
              )}
            </div>
            <div className="mb-3">
              <input
                className="bg-[#343434] shadow appearance-none rounded w-full p-2 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="companyID"
                type="text"
                placeholder="Companies House ID"
                {...register("companyID")}
                required
              />
              {submitErrors?.companyID && watch("companyID") === "" && (
                <p className="text-red-500">{submitErrors?.companyID}</p>
              )}
            </div>
            <div className="mb-3">
              <input
                className="bg-[#343434] shadow appearance-none rounded w-full p-2 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="businessURL"
                type="text"
                placeholder="Business URL"
                {...register("businessURL")}
                required
              />
              {submitErrors?.businessURL && watch("businessURL") === "" && (
                <p className="text-red-500">{submitErrors?.businessURL}</p>
              )}
            </div>
            <div className="mb-3">
              <input
                className="w-full p-2 leading-tight text-white rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="logo"
                // type="file"
                type="file"
                placeholder="Upload logo"
                {...register("logo")}
                required
              />
            </div>
          </div>
          <div className="w-full">
            <div className="mb-3">
              <input
                className="bg-[#343434] shadow appearance-none rounded w-full p-2 text-white leading-tight focus:outline-none focus:shadow-outline"
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
                  className="bg-[#343434] shadow appearance-none rounded w-full p-2 text-white leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Passwrod"
                  {...register("password")}
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
              {submitErrors?.password && (
                <p className="text-red-500">{submitErrors?.password}</p>
              )}
            </div>
          </div>
        </div>
        <label className="flex items-center mb-3 space-x-2">
          <input
            type="checkbox"
            // checked={isTermsAccepted}
            // onChange={handleCheckboxChange}
            required
            className="form-checkbox h-4 w-4 shadow-none ring-0 text-[#3FA9F5]"
          />
          <span className="text-sm text-white">
            By signing up, you agree to the{" "}
            <a href="#" className="text-blue-500">
              Terms and Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500">
              Privacy Policy
            </a>
          </span>
        </label>
        <button
          type="submit"
          className="bg-[#932580] w-full hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
