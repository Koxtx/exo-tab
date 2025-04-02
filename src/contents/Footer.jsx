import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-auto gap-6 justify-center items-center mt-2    bg-gray-800 text-amber-50  max-md:flex-col max-md:items-start max-md:p-8 max-md:h-auto">
      <nav className=" flex flex-col justify-start items-start w-65  gap-2-y ">
        <h3 className="text-xl font-medium mb-4">À propos</h3>
        <p className="text-wrap">
          Nous aidons les voyageurs à trouver le logement idéal.
        </p>
      </nav>
      <nav className=" flex flex-col justify-start items-start mr-20   gap-2-y  ">
        <h3 className="text-xl font-medium mb-4">Support</h3>
        <a href="" className="hover:underline">
          Contact
        </a>
        <a href="" className="hover:underline">
          FAQ
        </a>
      </nav>
      <nav className="flex flex-col justify-start items-start mr-20  gap-2-y ">
        <h3 className="text-xl font-medium mb-4">Suivez-nous</h3>
        <a href="" className="hover:underline">
          Facebook
        </a>
        <a href="" className="hover:underline">
          Instagram
        </a>
      </nav>
      <nav className="flex flex-col justify-start items-start mr-20    gap-2-y  ">
        <h3 className="text-xl font-medium mb-4">Mentions légales</h3>
        <a href="" className="hover:underline">
          Conditions générales
        </a>
        <a href="" className="hover:underline">
          Politique de confidentialité
        </a>
      </nav>
    </footer>
  );
}
