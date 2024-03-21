import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../features/auth/authActions";
import Error from "../Error";
import { RootState, AppDispatch } from "../../../../store";

interface FormData {
  email: string;
  password: string;
  // Add any other form fields here as needed
}
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userInfo, loading, error } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<FormData>();
  const navigate = useNavigate();

  const submitForm = (data: FormData) => {
    console.log(data)
    const dispatch: AppDispatch = useDispatch();
    dispatch(userLogin(data));
  };

  const handleEmailChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
  };

  // const handleSubmit = (e: { preventDefault: () => void; }) => {
  //   e.preventDefault();
  //   console.log("Email:", email);
  //   console.log("Password:", password);
  // };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit;
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/user-profile");
    }
  }, [navigate, userInfo]);

  return (
    <div className="w-full max-w-xs">
      <h1 className="text-[#3FA9F5] text-2xl font-bold mb-4">Existing users</h1>
      <form className="pb-8 mb-4 w-8/12" onSubmit={handleSubmit(submitForm)}>
        {error && <Error>{error}</Error>}
        <div className="mb-3">
          <input
            className="bg-[#343434] shadow appearance-none rounded w-full p-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email address"
            // value={email}
            // onChange={handleEmailChange}
            {...register("email")}
          />
        </div>
        <div className="mb-3 relative flex items-center justify-end">
          <input
            className="bg-[#343434] shadow appearance-none rounded w-full p-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Passwrod"
            // value={password}
            // onChange={handlePasswordChange}
            onKeyDown={handleKeyPress}
            {...register("password")}
          />
          <div
            className="absolute pr-2 cursor-pointer"
            onClick={handleSubmit(submitForm)}
          >
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
          </div>
        </div>
        <p className="text-white text-xs text-center cursor-pointer">
          Reset password
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
