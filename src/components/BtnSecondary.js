import React from "react";

const BtnSecondary = ({ label, className, onClick }) => {
  return (
    <button className={`rounded-full px-6 py-2 transition-all ease-in-out bg-transparent hover:bg-[#2e4f1c] text-center ${className}`} onClick={onClick}>
      {label}
    </button>
  )
}

export default BtnSecondary;