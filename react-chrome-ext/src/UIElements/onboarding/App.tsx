import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/public/Login";
import Home from "./pages/public/Home";
import BusinessLogin from "./pages/business/BusinessLogin";
import BusinessHome from "./pages/business/BusinessHome";
import "./App.css";
import VerifyEmail from "./components/VerifyEmail";
import Conpons from "./pages/public/Conpons";
import ExploreCoupons from "./components/ExploreCoupons";
import MyCoupons from "./components/MyCoupons";
import HighStreet from "./pages/public/HighStreet";
import MyAccount from "./pages/public/MyAccount";
import CustomWrapper from "./CustomWrapper";

const App = () => {
  return (
    <div className="min-h-screen">
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<CustomWrapper />}>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/business" element={<BusinessLogin />} />
            <Route path="/business-home" element={<BusinessHome />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/coupons" element={<Conpons />} />
            <Route path="/explore-coupons" element={<ExploreCoupons />} />
            <Route path="/my-coupons" element={<MyCoupons />} />
            <Route path="/high-street" element={<HighStreet />} />
            <Route path="/my-account" element={<MyAccount />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
