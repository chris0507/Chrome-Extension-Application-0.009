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
            <div className="flex-auto pl-0 pb-0 w-full xl:w-2/3 h-fit  p-5 bg-[#381C33] flex rounded-lg flex-row">
              <div className="text-white text-[10px] w-5 grid pb-5 grid-rows-8 gap-[5px]" >
                <div className="flex items-center" >
                  5%
                </div>
                <div className="flex items-center" >
                  0%
                </div>
                <div className="flex items-center" >
                  6%
                </div>
                <div className="flex items-center" >
                  15%
                </div>
                <div className="flex items-center" >
                  0%
                </div>
                <div className="flex items-center" >
                  8%
                </div>
                <div className="flex items-center" >
                  3%
                </div>
                <div className="flex items-center" >
                  1%
                </div>
              </div>
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
