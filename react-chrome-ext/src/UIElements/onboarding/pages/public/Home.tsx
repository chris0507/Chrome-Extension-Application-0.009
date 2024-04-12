import RightSidebar from "../../components/public/RightSidebar";
import BlocksGrid from "../../components/public/BlocksGrid";
import MenuModal from "../../components/MenuModal";

const Home = () => {
  return (
    <div className=" w-full flex justify-center items-center">
      <div className="container">
        <div className="flex w-full  relative items-start">
          <MenuModal userType="public" />
          <div className="flex w-full flex-col xl:flex-row ">
            <div className="flex-auto w-full xl:w-2/3 h-fit  p-5 bg-[#1D3D4A] rounded-lg">
              <BlocksGrid />
            </div>
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
