import { useNavigate } from "react-router-dom";

const Conpons = () => {
  const navgate = useNavigate();
  const handleExploreCoupons = () => {
    navgate("/explore-coupons");
  };
  const items = [
    {
      image: "./images/pieminister.png",
    },
    {
      image: "./images/unidays.png",
    },
    {
      image: "./images/annie.png",
    },
    {
      image: "./images/pryzm.png",
    },
    {
      image: "./images/finefish.png",
    },
    {
      image:
        "https://m.media-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png",
    },
    {
      image: "./images/daughuatts.png",
    },
    {
      image: "./images/Logo-google-icon-PNG.png",
    },
    {
      image: "./images/boots.png",
    },
    {
      image: "./images/forest.png",
    },
    {
      image: "./images/antenna.png",
    },
    {
      image: "./images/castlerock.png",
    },
    {
      image: "./images/m.png",
    },
    {
      image: "./images/uo.png",
    },
    {
      image: "./images/tesco.png",
    },
    {
      image: "./images/waterstones.png",
    },
    {
      image: "./images/sainsbury.png",
    },
    {
      image: "./images/uo.png",
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-5">
          {items &&
            items.map((item, index) => (
              <div
                key={index}
                className="border border-white rounded-xl cursor-pointer hover:shadow-xl transition duration-300 ease-in-out"
                onClick={handleExploreCoupons}
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full rounded-xl"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Conpons;
