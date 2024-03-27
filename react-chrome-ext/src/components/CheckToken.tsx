import axios from "axios";

export const checkTokenValidity = async () => {
  const API_BASE_URL = "https://chrome-extension-application-0-009-server.onrender.com/";

  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(`${API_BASE_URL}check-token`, {
      token,
    });
    if ([200, 201, 204].includes(response.status)) {
      return true;
    }
  } catch (err) {
    console.log("Error: ", err);
    return false;
  }

  return false;
};
