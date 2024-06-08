import React from "react";

const BtnPrimary = ({ label, className, onClick }) => {
  return (
    <button className={`rounded-full px-6 py-2 bg-transparent transition-all ease-in-out bg-[#2e4f1c] hover:bg-[#2e4f1c] min-w-40 text-center ${className}`} onClick={onClick}>
      {label}
    </button>
  )
}

export default BtnPrimary;