import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-[#3890CE] font-bold text-lg">
        Part funded and supported by
      </div>
      <div className="flex flex-row gap-3">
        <div>
          <img src="./images/European_Union.png" width={60} alt="" />
        </div>
        <div>
          <img src="./images/Big_House.png" width={55} alt="" />
        </div>
        <div>
          <img src="./images/parental_advisory.png" width={90} alt="" />
        </div>
        
      </div>
    </div>
  );
}

export default Footer