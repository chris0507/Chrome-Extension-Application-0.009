import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import env from "react-dotenv";
import {
  NotVerificationToast,
  VerifyCodeSentSuccessFullyToast,
  SuccessLoginToast,
  SuccessPasswordChangedToast,
  SomeThingwentWrongToast,
} from "../Alert";
import { getValue } from "@testing-library/user-event/dist/utils";
import { Modal, Button } from "flowbite-react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { setUserInfo } from "../../features/auth/authSlice";

interface LoginFormProps {
  onStatusChange: (status: string) => void;
  setLoading: (status: boolean) => void;
  setResetpasswordEmailValid: (status: boolean) => void;
}
interface FormData {
  email: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onStatusChange,
  setLoading,
  setResetpasswordEmailValid,
}) => {
  const API_BASE_URL = process.env.REACT_APP_API_URL;
const dispatch = useDispatch<AppDispatch>();
  const { register, getValues, handleSubmit, watch } = useForm<FormData>();
  const navigate = useNavigate();
  const [submitErrors, setSubmitErrors] = useState<FormData>();
  const [showReSetPassword, setShowReSetPassword] = useState<boolean>(false);
  const [showResetPasswordEmail, setShowResetPasswordEmail] =
    useState<boolean>(false);
  const [resetPasswordEmail, setResetPasswordEmail] = useState<string>("");
  const [verifyCode, setVerifyCode] = useState<string>("");
  const [showEnterVerifyCode, setShowEnterVerifyCode] =
    useState<boolean>(false);

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [resetpasswordValidation, setResetpasswordValidation] =
    useState<boolean>(false);

  const handleSetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setResetpasswordValidation(true);
      return;
    }
    axios
      .post(`${API_BASE_URL}reset-password`, {
        email: resetPasswordEmail,
        password: password,
        type: "public",
      })
      .then((res) => {
        console.log(res);
        setShowReSetPassword(false);
        SuccessPasswordChangedToast();
      })
      .catch((err) => {
        console.log(err);
        SomeThingwentWrongToast();
      });
  };

  const handleResetPasswordEmail = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post(`${API_BASE_URL}forgot-password`, {
        email: resetPasswordEmail,
        type: "public",
      })
      .then((res) => {
        console.log(res);
        VerifyCodeSentSuccessFullyToast();
        setShowResetPasswordEmail(false);
        setShowEnterVerifyCode(true);
      })
      .catch((err) => {
        if (err.response.data.status == "not-exist") {
          setResetpasswordEmailValid(true);
        }
        console.log(err);
      });
  };

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post(`${API_BASE_URL}verify-code`, {
        email: resetPasswordEmail,
        code: verifyCode,
        type: "public",
      })
      .then((res) => {
        console.log(res);
        setShowEnterVerifyCode(false);
        setShowReSetPassword(true);
      })
      .catch((err) => {
        SomeThingwentWrongToast();
        console.log(err);
      });
  };

  const submitForm = (data: FormData) => {
    if (!validate()) return;
    setLoading(true);
    console.log("api_abse_url:", API_BASE_URL);
    axios
      .post(`${API_BASE_URL}login`, data)
      .then((res) => {
        if (res.data.status === "success") {
          onStatusChange("successLogin");
          SuccessLoginToast();
          const token = res.data.token;
          localStorage.setItem("token", token);
          localStorage.setItem("userType", "public");
          dispatch(setUserInfo(res.data.data))
          navigate("/home");
        } else if (res.data.status === "not-verify") {
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
    <div className="flex justify-center w-full border-r-0 border-gray-400 sm:border-r ">
      <form className="pb-8 mb-4" onSubmit={handleSubmit(submitForm)}>
        <h1 className="text-[#3FA9F5] text-2xl font-bold mb-4">
          Existing users
        </h1>
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

        <button
          data-modal-target="default-modal"
          data-modal-toggle="default-modal"
          className="mb-3 text-xs text-left text-white cursor-pointer"
          type="button"
          onClick={() => setShowResetPasswordEmail(true)}
        >
          Reset Password
        </button>

        <button
          onClick={() => handleSubmit(submitForm)()}
          className="bg-[#3FA9F5] w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
      <Modal
        dismissible
        show={showResetPasswordEmail}
        size={"sm"}
        onClose={() => setShowResetPasswordEmail(false)}
      >
        <div className="border border-solid border-[#2F2F2F] bg-[#374151] rounded">
          <Modal.Body>
            <form action="" onSubmit={handleResetPasswordEmail}>
              <div className="space-y-6">
                <label htmlFor="" className="text-white">
                  Enter Your Email Address
                </label>
                <input
                  className="bg-[#343434] shadow appearance-none rounded w-full p-2 text-white leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email address"
                  required
                  onChange={(e) => setResetPasswordEmail(e.target.value)}
                />
                <div className="flex justify-end ">
                  <Button type="submit" className="">
                    Reset Password
                  </Button>
                </div>
              </div>
            </form>
          </Modal.Body>
        </div>
      </Modal>
      <Modal
        dismissible
        show={showEnterVerifyCode}
        size={"sm"}
        onClose={() => setShowEnterVerifyCode(false)}
      >
        <div className="border border-solid border-[#2F2F2F] bg-[#374151] rounded">
          <Modal.Body>
            <form action="" onSubmit={handleVerifyCode}>
              <div className="space-y-6">
                <label htmlFor="" className="text-white">
                  Enter Veirfy Code you received
                </label>
                <input
                  className="bg-[#343434] shadow appearance-none rounded w-full p-2 text-white leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Verify Code"
                  required
                  onChange={(e) => setVerifyCode(e.target.value)}
                />
                <div className="flex justify-end ">
                  <Button type="submit" className="">
                    Verify
                  </Button>
                </div>
              </div>
            </form>
          </Modal.Body>
        </div>
      </Modal>
      <Modal
        dismissible
        show={showReSetPassword}
        size={"sm"}
        onClose={() => setShowReSetPassword(false)}
      >
        <div className="border border-solid border-[#2F2F2F] bg-[#374151] rounded">
          <Modal.Body>
            <form action="" onSubmit={handleSetPassword}>
              <div className="space-y-6">
                <label htmlFor="" className="text-white">
                  Reset Password
                </label>
                <input
                  className="bg-[#343434] shadow appearance-none rounded w-full p-2 text-white leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="New Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                {resetpasswordValidation && (
                  <p className="text-red-500">
                    Password and Confirm Password should be same
                  </p>
                )}
                <input
                  className="bg-[#343434] shadow appearance-none rounded w-full p-2 text-white leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Confirm Password"
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {resetpasswordValidation && (
                  <p className="text-red-500">
                    Password and Confirm Password should be same
                  </p>
                )}

                <div className="flex justify-end ">
                  <Button type="submit" className="">
                    Reset Password
                  </Button>
                </div>
              </div>
            </form>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default LoginForm;
