import "./App.css";
import Header from "./contents/Header";
import Logements from "./contents/logements/Logements";
import Footer from "./contents/Footer";
import Avis from "./contents/avis/Avis";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
  };
  const toggleUser = () => {
    setUser(!user);
  };

  return (
    <div
      className={`flex min-h-screen flex-col ${
        dark ? "bg-gray-800 text-emerald-50" : "bg-gray-100 text-black"
      }`}
    >
      <Header
        toggleUserMethod={toggleUser}
        user={user}
        dark={dark}
        toggleDark={toggleDark}
      />
      <main className="h-full wh mb-10">
        <Logements user={user} />
        <Avis />
      </main>
      <Footer />
    </div>
  );
}

export default App;
