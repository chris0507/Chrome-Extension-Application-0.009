import React from "react";

const MyCoupons = () => {
  const items = [
    {
      image:'./images/logos/annies logo.png',
      title:'Free drinks with your Buffalo Ranch',
      name:"",
      content:"Sweeten the deal with this latest additions to the menu, the Buffalo Ranch burger. Get a free drink to help wash it down; offer ends 10th Nov 2024.",
      coupon_code:'B49H5577'
    },
    {
      image:'./images/logos/Doughnotts logo.png',
      title:'Behind the sense Thursday.',
      name:'',
      content:"Take a peak into Nottingham'sfavourite bakery and see how we turn our lovely wheat into your favourite donuts every Thursday; access ends August 2024.",
      coupon_code:'B16T8844'
    },
    {
      image:'./images/logos/Amazon logo.jpg',
      title:"Haven't found that perfect present yet?",
      name:"",
      content:"How about Amazon next day prime delivery, try extend that delivery period, no rush? Offer ends December 24th 2024",
      coupon_code:'T16T8844'
    },
    {
      image:'./images/logos/Bunk nottingham logo.png',
      title:"Join Ramadan with 25%  off your meal with Halal",
      name:"",
      content:"We wanted to offer you Halal meals during Ramadan 2024. It's certified by officials but your opinion is what matters to join the celebrations; offer ends April 09th 2024.",
      coupon_code:'T16T8844'
    }
  ]
  return (
    <div className="flex justify-center p-4 mt-2">
      <div className="container flex-col w-full">
        <div className="flex flex-col justify-center w-full">
          <div className="flex items-center justify-start p-4">
            <span className="text-2xl font-bold text-white">
              Coupons and offers
            </span>
          </div>
          <div className="w-full h-full border border-solid border-[#2F2F2F] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% p-5">
            {items
              .map((item, index) => (
                <div key={index} className="mb-3">
                  <div className="flex justify-between items-center gap-5 border border-white rounded-2xl bg-[#232F3E] p-4">
                    <div className="ml-auto mr-auto ">
                      <img src={item.image} className=" w-[100px]" alt="" />
                    </div>
                    <div className="w-[70%]">
                      <p className="mb-3 text-xl font-bold text-white">
                       {item.title}
                      </p>
                      <p className="text-sm text-white">
                        <span className="font-bold " >{item.name} </span>
                        {item.content}
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3">
                      <p className="mb-1 text-xl text-white">Coupon code</p>
                      <button className="flex items-center justify-between px-2 pl-5 bg-white rounded">
                        <span className="py-1 pr-2">{item.coupon_code}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 py-1 pl-2 border-l-2 border-dashed"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="text-end">
                    <span className="text-sm text-white">
                      Coupon terms and conditions
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCoupons;
