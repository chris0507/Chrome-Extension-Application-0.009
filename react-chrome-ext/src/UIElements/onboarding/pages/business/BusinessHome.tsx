import BusinessBlocksGrid from "../../components/business/BusinessBlocksGrid";
import MenuModal from "../../components/MenuModal";
import BRightSidebar from "../../components/business/BRightSidebar";

const BusinessHome = () => {
  return (
    <div className="flex relative">
      <MenuModal userType="business" />
      <div className="h-screen p-5 bg-[#381C33] rounded-lg">
        <BusinessBlocksGrid />
      </div>
      <BRightSidebar />
    </div>
  );
};

export default BusinessHome;
