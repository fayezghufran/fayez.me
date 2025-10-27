// Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#111111] z-50">
      <div className="relative w-16 h-16 flex items-center justify-center">
        {/* Outer subtle ping ring */}
        <div className="absolute w-16 h-16 border-2 border-[#d6ae7b] rounded-full opacity-20 animate-ping"></div>

        {/* Middle rotating ring */}
        <div className="absolute w-16 h-16 border-2 border-t-[#d6ae7b] border-gray-600 rounded-full animate-spin"></div>

        {/* Center bouncing dots */}
        <div className="absolute flex space-x-2">
          <div className="w-3 h-3 bg-[#d6ae7b] rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-[#d6ae7b] rounded-full animate-bounce delay-150"></div>
          <div className="w-3 h-3 bg-[#d6ae7b] rounded-full animate-bounce delay-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
