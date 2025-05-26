"use client";
import React from "react";

export const Variable = () => {
  let _fullname = "sagar";
  console.log(_fullname);
  const _age = 22;
  console.log(_age);
  
  return (
    <div className="min-h-screen min-w-screen bg-yellow-400 flex justify-center items-center flex-col font-black text-4xl opacity-50">
      <div className="h-96 w-96 bg-red-500 flex justify-center items-center flex-col"> {_fullname} ,  {_age} </div>
    </div>
  );
};
export default Variable;
