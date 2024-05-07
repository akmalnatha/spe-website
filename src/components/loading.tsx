"use client";

import React from "react";
import ReactLoading from "react-loading";

const LoadingSpinner = () => (
  <div className="fixed z-[999] flex h-screen w-full items-center justify-center bg-white bg-opacity-95 backdrop-blur-md duration-300 ease-in-out">
    <ReactLoading
      type="spinningBubbles"
      color="#FDD001"
      height={100}
      width={100}
    />
  </div>
);

export default LoadingSpinner;
