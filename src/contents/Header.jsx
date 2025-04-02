import React from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

export default function Header({ toggleUserMethod, user, toggleDark, dark }) {
  return (
    <header
      className={`flex basis-14  p-4 shadow-lg bg-white ${
        dark ? "bg-gray-100" : "bg-gray-800"
      }}`}
    >
      <h1 className="basis-auto text-red-500 text-xl font-bold">
        Airbed & Breakfast
      </h1>
      {user ? (
        <nav className="flex flex-auto justify-end gap-x-4  font-extralight  max-md:hidden ">
          <a className="basis-auto hover:font-medium cursor-pointer">
            {" "}
            Maisons
          </a>
          <a className="basis-auto hover:font-medium cursor-pointer  ">
            Appartement
          </a>
          <a className="basis-auto hover:font-medium cursor-pointer"> Villas</a>
          <a
            className="basis-auto hover:font-medium cursor-pointer"
            onClick={toggleUserMethod}
          >
            Déconnexion
          </a>
        </nav>
      ) : (
        <nav className="flex flex-auto justify-end gap-x-4  font-extralight  max-md:hidden ">
          <a
            onClick={toggleUserMethod}
            className="basis-auto hover:font-medium cursor-pointer"
          >
            Connexion
          </a>
        </nav>
      )}
      {dark ? (
        <CiLight onClick={toggleDark} className="w-5 h-5 m-1 max-md:hidden " />
      ) : (
        <MdDarkMode onClick={toggleDark} className=" m-1 max-md:hidden " />
      )}

      <nav className=" hidden max-md:flex flex-auto w-auto justify-end items-center">
        <i className="fa-solid fa-bars "></i>
      </nav>
    </header>
  );
}
