import React from 'react'

const ExpiredCoupons = () => {
    const items = [
        {
          image:"./images/logos/the cod's scallops.png",
          title:"Try it stop talking it's 10% off.",
          name:"",
          content:"They did look less crispy earlier, it's not award winning fish and chips in Nottingham and Birmingham for nothing! Offer ends January 2024.",
        },
        {
          image:'./images/logos/Bunk nottingham logo.png',
          title:'Join Ramadan with 25% off your meal with Halal',
          name:'',
          content:"We wanted to offer you Halal meals during Ramadan 2024. It's certified by officials but your opinion is what matters to join the celebrations; offer ends April 09th 2024.",
        },
        {
          image:'./images/logos/Nottingham College.jpeg',
          title:'Take a tour make a positive difference.',
          name:"",
          content:"Together we aim to making positive differences for our learners and communities. Take a tour on Nottingham college campus with this coupon; offer ends March 2022.",
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
                          <button className='px-4 py-2 font-bold text-white bg-[#335681] rounded hover:bg-[#39669d]'>RePurchase</button>
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
}

export default ExpiredCoupons