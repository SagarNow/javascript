"use client";
import React from "react";

const page = () => {
  console.log("Hello World");
  console.warn("Hello World");
  
 const isfollow = true;
console.log(isfollow);
{
  let a = 10;
  console.log(a);
}

{
  let a = 20;
  console.log(a);
}
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-500  ">Hello World!! </div> 
  );
};

export default page;
