import axios from "axios";

export const checkTokenValidity = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post("http://localhost:5000/check-token", {
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
