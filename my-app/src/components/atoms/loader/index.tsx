"use client";

import React from "react";
import "./Loader.css";

const LoadingSpinner: React.FC<{ size?: number }> = ({ size = 40 }) => {
  return (
    <div
      className="spinner"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderWidth: `${size / 8}px`,
      }}
    />
  );
};

export default LoadingSpinner;
