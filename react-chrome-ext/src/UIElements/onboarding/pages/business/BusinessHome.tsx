import BusinessBlocksGrid from "../../components/business/BusinessBlocksGrid";
import MenuModal from "../../components/MenuModal";
import BRightSidebar from "../../components/business/BRightSidebar";

const BusinessHome = () => {
  return (
    <div className=" w-full flex justify-center items-center">
      <div className="container">
        <div className="flex w-full  relative items-start">
          <MenuModal userType="business" />
          <div className="flex w-full flex-col xl:flex-row ">
            <div className="flex-auto w-full xl:w-2/3 h-fit  p-5 bg-[#381C33] rounded-lg">
              <BusinessBlocksGrid />
            </div>
            <BRightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessHome;
