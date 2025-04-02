import React, { useState } from "react";
import Onelogement from "./Onelogement";

export default function Logements({ user, dark }) {
  const [listings, setListings] = useState([
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Villa de Luxe",
      location: "Nice, France",
      price: "250",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Chalet Montagne",
      location: "Chamonix, France",
      price: "180",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Maison Bohème",
      location: "Bordeaux, France",
      price: "120",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Loft Design",
      location: "Paris, France",
      price: "300",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Cabane en forêt",
      location: "Lille, France",
      price: "90",
    },
    {
      id: 6,
      image:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Appartement Moderne",
      location: "Lyon, France",
      price: "200",
    },
    {
      id: 7,
      image:
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Maison Contemporaine",
      location: "Marseille, France",
      price: "220",
    },
    {
      id: 8,
      image:
        "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Penthouse Vue",
      location: "Paris, France",
      price: "400",
    },
    {
      id: 9,
      image:
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Bungalow en Bord de Mer",
      location: "Biarritz, France",
      price: "270",
    },
    {
      id: 10,
      image:
        "https://images.pexels.com/photos/259988/pexels-photo-259988.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Château Rénové",
      location: "Loire Valley, France",
      price: "350",
    },
    {
      id: 11,
      image:
        "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Cottage Charmant",
      location: "Strasbourg, France",
      price: "150",
    },
  ]);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  function searchVille(event) {
    setSearch(event.target.value);
  }

  const newListing = {
    id: 12,
    image:
      "https://images.pexels.com/photos/2422464/pexels-photo-2422464.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "maison chaleureuse",
    location: "Béthune, France",
    price: "1000",
  };

  function addListing() {
    setListings([...listings, newListing]);
  }

  function indiqueId(id) {
    console.log(id);

    alert(id);
  }

  const toggleFavorite = (listingId) => {
    if (favorites.includes(listingId)) {
      setFavorites(favorites.filter((id) => id !== listingId));
    } else {
      setFavorites([...favorites, listingId]);
    }
  };

  return (
    <section className="p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-medium">Logements disponibles</h2>
        {favorites.length > 0 && (
          <div className="bg-red-500 text-gray-50 px-4 py-2 rounded-full">
            <span className="font-bold">{favorites.length}</span> Favoris
          </div>
        )}
      </div>

      <article className="flex flex-wrap flex-auto content-start items-center gap-4 max-2xl:overflow-auto max-2xl:p-5">
        {/* filtrer les logements par ville */}
        {user ? (
          <div>
            <div className="flex w-full justify-center mb-6 gap-4">
              <input
                type="text"
                className="w-96 outline-1 p-2 placeholder:pl-1.5 rounded-lg focus:outline-[#b20710]"
                placeholder="Rechercher une ville..."
                onChange={(e) => searchVille(e)}
                value={search}
              />
              <button
                onClick={addListing}
                className={`  ${
                  dark
                    ? " bg-gray-100 text-black"
                    : "bg-gray-800 text-emerald-50"
                } px-4 py-2 rounded hover:bg-gray-600 transition`}
              >
                Add Logement
              </button>
            </div>
            <div className="flex justify-self-start items-center flex-wrap gap-3">
              {listings
                .filter((listing) => {
                  return listing && listing.location
                    ? listing.location
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    : false;
                })
                .map((listing) => (
                  <Onelogement
                    listing={listing}
                    key={listing.id}
                    toggleFavorite={toggleFavorite}
                    isFavorite={favorites.includes(listing.id)}
                    indiqueId={indiqueId}
                  />
                ))}
            </div>
          </div>
        ) : (
          <p>Vous devez ëtre connecté !!!</p>
        )}
      </article>
    </section>
  );
}
