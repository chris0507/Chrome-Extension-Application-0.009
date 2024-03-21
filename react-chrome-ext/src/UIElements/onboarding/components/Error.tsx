import React, { ReactNode } from "react";

interface ErrorProps {
  children: ReactNode;
  // Include other props here if necessary, e.g.:
  // someProp: string;
}

const Error: React.FC<ErrorProps> = ({ children, ...props }) => {
  return (
    <div
      style={{ color: "#f23838", textAlign: "center", margin: "0.5rem 0" }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Error;
