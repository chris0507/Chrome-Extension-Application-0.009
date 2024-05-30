import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
import ManageCoupons from "./pages/business/ManageCoupons";
import BusinessAccount from "./pages/business/BusinessAccount";
import CreateCoupons from "./pages/business/CreateCoupons";
import EditCoupon from "./pages/business/EditCoupon";
import WrongPage from "./pages/WrongPage";
import ManageHighStreet from "./pages/business/ManageHighStreet";
import ExpiredCoupons from "./pages/public/ExpiredCoupons";

const App = () => {
  return (
    <div className="min-h-screen">
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<CustomWrapper />}>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/coupons" element={<Conpons />} />
              <Route path="/explore-coupons" element={<ExploreCoupons />} />
              <Route path="/expired-coupons" element={<ExpiredCoupons />} />
              <Route path="/high-street" element={<HighStreet />} />
              <Route path="/my-coupons" element={<MyCoupons />} />
              <Route path="/public-account" element={<MyAccount />} />
              <Route path="/verify-email" element={<VerifyEmail />} />
              <Route path="/business" element={<BusinessLogin />} />
              <Route path="/business-home" element={<BusinessHome />} />
              <Route path="/manage-coupons" element={<ManageCoupons />} />
              <Route path="/business-account" element={<BusinessAccount />} />
              <Route path="/create-coupons" element={<CreateCoupons />} />
              <Route path="/edit-coupon" element={<EditCoupon />} />
              <Route path="/wrong-page" element={<WrongPage />} />
              <Route path="/manage-high-street" element = {<ManageHighStreet />} />
            </Route>
          </Routes>
        </Router>
    </div>
  );
};

export default App;
