import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { registerUser, userLogin } from "./authActions";

interface AuthState {
  token: any;
  loading: boolean;
  userInfo: any; // Define type according to your userInfo structure
  userToken: string | null;
  error: any; // Define type according to your error structure
  success: boolean;
}

// Initialize userToken from local storage
const userToken: string | null = localStorage.getItem("userToken") || null;

const initialState: AuthState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
  token:null
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userToken"); // Delete token from storage
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    },
    setCredentials: (state, action: PayloadAction<any>) => {
      state.userInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Login user
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.userToken = action.payload.userToken;
      })
      .addCase(userLogin.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
    // Register user
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true; // Registration successful
      })
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, setCredentials } = authSlice.actions;

export default authSlice.reducer;
