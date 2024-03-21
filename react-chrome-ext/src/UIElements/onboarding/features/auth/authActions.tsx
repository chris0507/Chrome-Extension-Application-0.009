import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = "http://127.0.0.1:5000";

interface UserLoginProps {
    email: string;
    password: string;
}

interface RegisterUserProps {
  firstName: string;
  email: string;
  password: string;
}

interface ApiError extends Error {
  response?: {
    data?: {
      error_message?: string;
    };
  };
}

interface ErrorResponse {
  response?: {
    data?: {
      message: string;
    };
  };
}

function isErrorWithResponse(error: unknown): error is ApiError {
  return typeof error === "object" && error !== null && "response" in error;
}

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }: UserLoginProps, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${backendURL}auth/login`,
        { email, password },
        config
      );

      // store user's token in local storage
      localStorage.setItem("userToken", data.userToken);

      return data;
    } catch (error) {
      // return custom error message from API if any
      if (isErrorWithResponse(error)) {
        // Now TypeScript knows error is of type ApiError
        if (error.response?.data?.error_message) {
          return rejectWithValue(error.response.data.error_message);
        }
      }
      // Handle the case where the error does not have a response with an error message
      return rejectWithValue("An unknown error occurred");
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ firstName, email, password }:RegisterUserProps, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios.post(
        `${backendURL}/api/user/register`,
        { firstName, email, password },
        config
      );
    } catch (error) {
      if (typeof error === "object" && error !== null && "response" in error) {
        const typedError = error as ErrorResponse; // Type casting to the expected error shape.
        if (typedError.response?.data?.message) {
          return rejectWithValue(typedError.response.data.message);
        }
      }

      // Handle any generic errors, where the above structure didn't apply
      return rejectWithValue("An unexpected error occurred");
    }
  }
);
