import RightSidebar from "../../components/public/RightSidebar";
import BlocksGrid from "../../components/public/BlocksGrid";
import MenuModal from "../../components/MenuModal";

const Home = () => {
  return (
    <div className=" w-full flex justify-center items-center">
      <div className="container">
        <div className="flex w-full  relative items-start">
          <MenuModal userType="public" />
          <div className="flex w-full flex-col xl:flex-row xl:items-start items-center ">
            <div className="xl:hidden w-full flex mb-3 flex-row-reverse ">
              <img src="/images/logo.png" className="" alt="logo" width={150} />
            </div>
            <BlocksGrid />
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
