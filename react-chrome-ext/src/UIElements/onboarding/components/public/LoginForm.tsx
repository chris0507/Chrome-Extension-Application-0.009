import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import env from "react-dotenv";
import { NotVerificationToast, SuccessLoginToast } from "../Alert";
import { getValue } from "@testing-library/user-event/dist/utils";

interface LoginFormProps {
  onStatusChange: (status: string) => void;
  setLoading: (status: boolean) => void;
}
interface FormData {
  email: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onStatusChange,
  setLoading,
}) => {
  const API_BASE_URL = process.env.REACT_APP_API_URL;

  const { register, getValues, handleSubmit, watch } = useForm<FormData>();
  const navigate = useNavigate();
  const [submitErrors, setSubmitErrors] = useState<FormData>();

  const submitForm = (data: FormData) => {
    if (!validate()) return;
    setLoading(true);
    axios
      .post(`${API_BASE_URL}login`, data)
      .then((res) => {
        if (res.data.status === "success") {
          onStatusChange("successLogin");
          SuccessLoginToast();
          const token = res.data.data;
          localStorage.setItem("token", token);
          localStorage.setItem("userType", "public");
          navigate("/home");
        } else if (res.data.status == "not-verify") {
          NotVerificationToast();
          localStorage.setItem("verifyEmail", "true");
          navigate("/verify-email", {
            state: { email: getValues("email"), type: "public" },
          });
        }
      })
      .catch((err) => {
        const errStatus = err.response.data.status;
        if (errStatus == "not-exist") {
          onStatusChange("noexist");
        } else if (errStatus == "wrongPassword") {
          onStatusChange("wrongPassword");
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

  const initialValues = {
    email: "",
    password: "",
  };

  const validate = () => {
    const data: FormData = getValues();
    let errors: FormData = initialValues;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.email) {
      errors.email = "Email Empty Error";
    } else if (!emailRegex.test(data.email)) {
      errors.email = "Email format is not correct";
      console.log("Email format is not correct", errors.email);
    }
    if (!data.password) {
      errors.password = "Username Empty Error";
    }
    setSubmitErrors(errors);
    if (errors.email || errors.password) {
      return 0;
    }
    return 1;
  };

  return (
    <div className="w-full max-w-xs">
      <h1 className="text-[#3FA9F5] text-2xl font-bold mb-4">Existing users</h1>
      <form className="pb-8 mb-4 w-8/12" onSubmit={handleSubmit(submitForm)}>
        <div className="mb-3">
          <input
            className="bg-[#343434] shadow appearance-none rounded w-full p-2 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email address"
            {...register("email")}
            required
          />
          {submitErrors?.email && (
            <p className="text-red-500">{submitErrors?.email}</p>
          )}
        </div>
        <div className="mb-3">
          <div className="flex items-center justify-end">
            <input
              className="bg-[#343434] shadow appearance-none rounded w-full p-2 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              onKeyDown={handleKeyPress}
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
          {submitErrors?.password && watch("password") === "" && (
            <p className="text-red-500">{submitErrors?.password}</p>
          )}
        </div>
        <p className="text-white text-xs text-center cursor-pointer">
          Reset password
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
