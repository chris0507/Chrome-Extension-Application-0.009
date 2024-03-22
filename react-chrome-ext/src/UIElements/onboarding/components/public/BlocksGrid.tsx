import React, { useState, useEffect } from "react";
import { range } from "lodash";

const getBackgroundColor = (row: number, col: number): string => {
  return (row + col) % 2 === 0
    ? "bg-white border-[#24A9EB]"
    : "bg-[#2BAAE1] border-[#0070B7]";
};

const BlocksGrid = () => {
  const [blockSize, setBlockSize] = useState(0);

  useEffect(() => {
    // Calculate block size
    const updateBlockSize = () => {
      // Since we want to fit 8 blocks in the height, each block should take up 1/8 of the available viewport height minus the gaps
      const size = Math.floor((window.innerHeight - 7 * 5 - 40) / 8); // For 7 gaps of 5px each
      console.log(size);
      setBlockSize(size);
    };

    // Update blockSize on mount and when window resizes
    window.addEventListener("resize", updateBlockSize);
    updateBlockSize(); // Initial calculation

    return () => {
      window.removeEventListener("resize", updateBlockSize);
    };
  }, []);
  return (
    <div className="grid grid-cols-8 gap-[5px]">
      {range(8).map((row) =>
        range(8).map((col) => (
          <div
            key={`${row}-${col}`}
            className={`border-2 rounded-lg ${getBackgroundColor(row, col)}`}
            // style={{ height: "11vh" }}
            style={{ width: `${blockSize}px`, height: `${blockSize}px` }} // Set both width and height to blockSize
          />
        ))
      )}
    </div>
  );
};

export default BlocksGrid;
