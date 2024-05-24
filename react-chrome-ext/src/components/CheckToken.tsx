import axios from "axios";

export const checkTokenValidity = async () => {
  // const API_BASE_URL = "https://chrome-extension-application-0-009-server.onrender.com/";
  const API_BASE_URL = process.env.REACT_APP_API_URL;

  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(`${API_BASE_URL}check-token`, {
      token,
    });
    if ([200, 201, 204].includes(response.status)) {
      localStorage.setItem('email', response.data.data)
      return true;
    }
  } catch (err) {
    console.log("Error: ", err);
    return false;
  }

  return false;
};
