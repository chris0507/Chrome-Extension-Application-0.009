import React from "react";
import toast, { Toaster } from "react-hot-toast";

const NoExistToast = () => {
  toast("User does not exist!", {
    duration: 4000,
    position: "top-right",

    // Styling
    style: { minWidth: "200px" },
    className:
      "text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",

    // Custom Icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
        <circle
          cx="8"
          cy="8"
          r="7"
          fill="none"
          stroke="#e04006"
          stroke-width="2"
        />
        <path fill="none" stroke="#e04006" stroke-width="2" d="M8 4v6m0 1v2" />
      </svg>
    ),

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
};

const ExistEmailToast = () => {
  toast("Already registered user!", {
    duration: 4000,
    position: "top-right",

    // Styling
    style: { minWidth: "200px" },
    className:
      "text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",

    // Custom Icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
        <circle
          cx="8"
          cy="8"
          r="7"
          fill="none"
          stroke="#e04006"
          stroke-width="2"
        />
        <path fill="none" stroke="#e04006" stroke-width="2" d="M8 4v6m0 1v2" />
      </svg>
    ),

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
};

const WrongPassToast = () => {
  toast("Password is not correct!", {
    duration: 4000,
    position: "top-right",

    // Styling
    style: { minWidth: "200px" },
    className:
      "text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",

    // Custom Icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
        <circle
          cx="8"
          cy="8"
          r="7"
          fill="none"
          stroke="#e04006"
          stroke-width="2"
        />
        <path fill="none" stroke="#e04006" stroke-width="2" d="M8 4v6m0 1v2" />
      </svg>
    ),

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
};

const SuccessLoginToast = () => {
  toast("Successful Login!", {
    duration: 4000,
    position: "top-right",

    // Styling
    style: { minWidth: "200px" },
    className:
      "text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400",

    // Custom Icon
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0,0,256,256"
        width="25px"
        height="25px"
      >
        <g
          fill="#36ed4a"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
        >
          <g transform="scale(5.12,5.12)">
            <path d="M25,2c-12.69047,0 -23,10.30953 -23,23c0,12.69047 10.30953,23 23,23c12.69047,0 23,-10.30953 23,-23c0,-12.69047 -10.30953,-23 -23,-23zM25,4c11.60953,0 21,9.39047 21,21c0,11.60953 -9.39047,21 -21,21c-11.60953,0 -21,-9.39047 -21,-21c0,-11.60953 9.39047,-21 21,-21zM34.98828,14.98828c-0.3299,0.0065 -0.63536,0.17531 -0.81641,0.45117l-10.20117,15.03711l-7.29102,-6.76562c-0.26069,-0.25084 -0.63652,-0.34135 -0.98281,-0.23667c-0.3463,0.10468 -0.60907,0.38821 -0.68715,0.74145c-0.07809,0.35324 0.04068,0.72112 0.31059,0.96201l8.99609,8.34766l11.51172,-16.96484c0.2153,-0.3085 0.23926,-0.71173 0.06201,-1.04356c-0.17725,-0.33183 -0.52573,-0.53612 -0.90186,-0.5287z"></path>
          </g>
        </g>
      </svg>
    ),

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
};
const SuccessPasswordChangedToast = () => {
  toast("Password Changed Successfully!", {
    duration: 4000,
    position: "top-right",

    // Styling
    style: { minWidth: "200px" },
    className:
      "text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400",

    // Custom Icon
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0,0,256,256"
        width="25px"
        height="25px"
      >
        <g
          fill="#36ed4a"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
        >
          <g transform="scale(5.12,5.12)">
            <path d="M25,2c-12.69047,0 -23,10.30953 -23,23c0,12.69047 10.30953,23 23,23c12.69047,0 23,-10.30953 23,-23c0,-12.69047 -10.30953,-23 -23,-23zM25,4c11.60953,0 21,9.39047 21,21c0,11.60953 -9.39047,21 -21,21c-11.60953,0 -21,-9.39047 -21,-21c0,-11.60953 9.39047,-21 21,-21zM34.98828,14.98828c-0.3299,0.0065 -0.63536,0.17531 -0.81641,0.45117l-10.20117,15.03711l-7.29102,-6.76562c-0.26069,-0.25084 -0.63652,-0.34135 -0.98281,-0.23667c-0.3463,0.10468 -0.60907,0.38821 -0.68715,0.74145c-0.07809,0.35324 0.04068,0.72112 0.31059,0.96201l8.99609,8.34766l11.51172,-16.96484c0.2153,-0.3085 0.23926,-0.71173 0.06201,-1.04356c-0.17725,-0.33183 -0.52573,-0.53612 -0.90186,-0.5287z"></path>
          </g>
        </g>
      </svg>
    ),

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
};

const SuccessRegisterToast = () => {
  toast("Successful Registered!", {
    duration: 4000,
    position: "top-right",

    // Styling
    style: { minWidth: "200px" },
    className:
      "text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400",

    // Custom Icon
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0,0,256,256"
        width="25px"
        height="25px"
      >
        <g
          fill="#36ed4a"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
        >
          <g transform="scale(5.12,5.12)">
            <path d="M25,2c-12.69047,0 -23,10.30953 -23,23c0,12.69047 10.30953,23 23,23c12.69047,0 23,-10.30953 23,-23c0,-12.69047 -10.30953,-23 -23,-23zM25,4c11.60953,0 21,9.39047 21,21c0,11.60953 -9.39047,21 -21,21c-11.60953,0 -21,-9.39047 -21,-21c0,-11.60953 9.39047,-21 21,-21zM34.98828,14.98828c-0.3299,0.0065 -0.63536,0.17531 -0.81641,0.45117l-10.20117,15.03711l-7.29102,-6.76562c-0.26069,-0.25084 -0.63652,-0.34135 -0.98281,-0.23667c-0.3463,0.10468 -0.60907,0.38821 -0.68715,0.74145c-0.07809,0.35324 0.04068,0.72112 0.31059,0.96201l8.99609,8.34766l11.51172,-16.96484c0.2153,-0.3085 0.23926,-0.71173 0.06201,-1.04356c-0.17725,-0.33183 -0.52573,-0.53612 -0.90186,-0.5287z"></path>
          </g>
        </g>
      </svg>
    ),

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
};

const WrongVerificationToast = () => {
  toast("Verification code is not correct!", {
    duration: 4000,
    position: "top-right",

    // Styling
    style: { minWidth: "200px" },
    className:
      "text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",

    // Custom Icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
        <circle
          cx="8"
          cy="8"
          r="7"
          fill="none"
          stroke="#e04006"
          stroke-width="2"
        />
        <path fill="none" stroke="#e04006" stroke-width="2" d="M8 4v6m0 1v2" />
      </svg>
    ),

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
};
const SomeThingwentWrongToast = () => {
  toast("Something went wrong!", {
    duration: 4000,
    position: "top-right",

    // Styling
    style: { minWidth: "200px" },
    className:
      "text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",

    // Custom Icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
        <circle
          cx="8"
          cy="8"
          r="7"
          fill="none"
          stroke="#e04006"
          stroke-width="2"
        />
        <path fill="none" stroke="#e04006" stroke-width="2" d="M8 4v6m0 1v2" />
      </svg>
    ),

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
};

const VerifyCodeSentSuccessFullyToast = () => {
  toast("Verification code sent successfully!", {
    duration: 4000,
    position: "top-right",

    // Styling
    style: { minWidth: "200px" },
    className:
      "text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400",

    // Custom Icon
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0,0,256,256"
        width="25px"
        height="25px"
      >
        <g
          fill="#36ed4a"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
        >
          <g transform="scale(5.12,5.12)">
            <path d="M25,2c-12.69047,0 -23,10.30953 -23,23c0,12.69047 10.30953,23 23,23c12.69047,0 23,-10.30953 23,-23c0,-12.69047 -10.30953,-23 -23,-23zM25,4c11.60953,0 21,9.39047 21,21c0,11.60953 -9.39047,21 -21,21c-11.60953,0 -21,-9.39047 -21,-21c0,-11.60953 9.39047,-21 21,-21zM34.98828,14.98828c-0.3299,0.0065 -0.63536,0.17531 -0.81641,0.45117l-10.20117,15.03711l-7.29102,-6.76562c-0.26069,-0.25084 -0.63652,-0.34135 -0.98281,-0.23667c-0.3463,0.10468 -0.60907,0.38821 -0.68715,0.74145c-0.07809,0.35324 0.04068,0.72112 0.31059,0.96201l8.99609,8.34766l11.51172,-16.96484c0.2153,-0.3085 0.23926,-0.71173 0.06201,-1.04356c-0.17725,-0.33183 -0.52573,-0.53612 -0.90186,-0.5287z"></path>
          </g>
        </g>
      </svg>
    ),

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
};

const NotVerificationToast = () => {
  toast("Please verify your account", {
    duration: 4000,
    position: "top-right",

    // Styling
    style: { minWidth: "200px" },
    className:
      "text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",

    // Custom Icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
        <circle
          cx="8"
          cy="8"
          r="7"
          fill="none"
          stroke="#e04006"
          stroke-width="2"
        />
        <path fill="none" stroke="#e04006" stroke-width="2" d="M8 4v6m0 1v2" />
      </svg>
    ),

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
};

export {
  NoExistToast,
  ExistEmailToast,
  WrongPassToast,
  SuccessLoginToast,
  SuccessRegisterToast,
  WrongVerificationToast,
  NotVerificationToast,
  VerifyCodeSentSuccessFullyToast,
  SuccessPasswordChangedToast,
  SomeThingwentWrongToast,
};
