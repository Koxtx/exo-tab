import React from "react";

export default function OneAvi({ review }) {
  // card avi
  return (
    <div className="flex-col flex-auto  p-5 rounded-4xl shadow-lg scale-100 hover:cursor-pointer hover:scale-105 hover:transition-transform hover:duration-500 hover:ease-in-out  max-md:w-full text-black">
      <h4 className="text-1/2xl font-medium">{review.name}</h4>
      <p className="font-light mt-2">{review.review} </p>
    </div>
  );
}
