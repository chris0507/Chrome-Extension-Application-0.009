import RightSidebar from "../../components/public/RightSidebar";
import BlocksGrid from "../../components/public/BlocksGrid";
import MenuModal from "../../components/MenuModal";

const Home = () => {
  return (
    <div className="flex relative">
      <MenuModal />
      <div className="h-screen p-5 bg-[#1D3D4A] rounded-lg">
        <BlocksGrid />
      </div>
      <RightSidebar />
    </div>
  );
};

export default Home;
