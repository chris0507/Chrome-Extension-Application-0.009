import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Wrapper = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = localStorage.getItem("currentPath");
    if (path !== "/") navigate(path as string);
  }, []);
  useEffect(() => {
    localStorage.setItem("currentPath", location.pathname);
  }, [location]);

  return (
    <div className="w-full h-full">
      <Outlet />
    </div>
  );
};

export default Wrapper;
