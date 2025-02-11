// src/App.tsx
import React, { useEffect, useState } from "react";
import api from "./api/heroes";
import HeroForm from "./components/HeroForm";
import HeroList from "./components/HeroList";
import type { Hero } from "./interfaces/hero.interface";
import { toast, ToastContainer } from "react-toastify";
import { toastOptions } from "./config";

const App: React.FC = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  const fetchHeroes = async () => {
    try {
      const data = await api.findHeroes();
      setHeroes(data);
    } catch {
      toast.error("Could not fetch data! Please try again!", toastOptions);
    }
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  return (
    <>
      <div className="bg-gray-50 min-h-screen flex flex-col items-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mt-10">
          Humble Superheroes
        </h1>
        <div className="max-w-4xl mx-auto p-4 space-y-12">
          <HeroForm refreshHeroes={fetchHeroes} />
          <HeroList heroes={heroes} />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
