import { useNavigate } from "react-router-dom";

const Conpons = () => {
  const navgate = useNavigate();
  const handleExploreCoupons = () => {
    navgate("/explore-coupons");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-5">
      {Array(15)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="border border-white rounded-xl cursor-pointer hover:shadow-xl transition duration-300 ease-in-out"
            onClick={handleExploreCoupons}
          >
            <img
              src="https://m.media-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"
              alt=""
              className="w-full h-auto rounded-2xl"
            />
          </div>
        ))}
    </div>
  );
};

export default Conpons;
