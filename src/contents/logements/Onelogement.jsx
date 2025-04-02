import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function Onelogement({
  listing,
  toggleFavorite,
  isFavorite,
  indiqueId,
}) {
  // Fonction pour gérer le clic sur le cœur
  const handleFavoriteClick = () => {
    toggleFavorite(listing.id);
  };

  return (
    <div
      className={`flex-col p-5 rounded-4xl shadow-xl w-65 min-w-65 hover:cursor-pointer bg-gray-50 text-black`}
    >
      <img
        src={listing.image}
        alt={listing.title}
        className="rounded-4xl h-40 w-full"
        onClick={() => indiqueId(listing.id)}
      />
      <h4 className="text-xl font-medium m-1">{listing.title}</h4>
      <p className="font-light m-1">{listing.location}</p>
      <div className="flex gap-x-3 items-center justify-between">
        <p className="text-red-600 font-bold m-1">
          {`${listing.price} € / nuit`}
        </p>
        <div
          onClick={handleFavoriteClick}
          className="cursor-pointer transition-all duration-300 hover:scale-110"
        >
          {isFavorite ? (
            <FaHeart className="text-pink-500" />
          ) : (
            <FaRegHeart className="text-black" />
          )}
        </div>
      </div>
    </div>
  );
}
