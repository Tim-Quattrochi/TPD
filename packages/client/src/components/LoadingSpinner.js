import React from "react";

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center ">
      <div
        className="w-5 h-5 mr-3 rounded-full animate-spin border-2 border-solid border-amber-500 border-t-transparent"
        viewBox="0 0 24 24"
      ></div>
    </div>
  );
}

export default LoadingSpinner;
