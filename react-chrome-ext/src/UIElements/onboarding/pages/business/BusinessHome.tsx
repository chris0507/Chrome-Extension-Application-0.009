import BusinessBlocksGrid from "../../components/business/BusinessBlocksGrid";
import MenuModal from "../../components/MenuModal";
import BRightSidebar from "../../components/business/BRightSidebar";

const BusinessHome = () => {
  return (
    <div className=" w-full flex justify-center items-center">
      <div className="container">
        <div className="flex w-full  relative items-start">
          <MenuModal userType="business" />
          <div className="flex w-full flex-col xl:flex-row xl:items-start items-center  ">
            <div className="flex-auto pl-0 pb-0 w-full  h-fit  p-5  flex rounded-lg flex-col justify-center items-center">
              <div className="xl:hidden w-full flex mb-3 flex-row-reverse ">
                <img
                  src="/images/logo.png"
                  className=""
                  alt="logo"
                  width={150}
                />
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
