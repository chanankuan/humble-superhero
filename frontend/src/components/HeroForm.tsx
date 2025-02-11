// src/components/HeroForm.tsx
import { CreateHero } from "../interfaces/hero.interface";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../api/heroes";
import { toast } from "react-toastify";
import { heroSchema } from "../validation/heroSchema";
import { toastOptions } from "../config";

function HeroForm({ refreshHeroes }: { refreshHeroes: () => void }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(heroSchema) });

  async function handleHeroSubmit(
    formData: CreateHero,
    refreshHeroes: () => void
  ) {
    try {
      await api.createHero(formData);

      // Reset the form
      reset();

      refreshHeroes(); // Refresh hero list after adding

      toast.success("Superhero created!", toastOptions);
    } catch {
      toast.error("Error occured! Please try again!", toastOptions);
    }
  }

  return (
    <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 p-8 rounded-xl shadow-lg max-w-md mx-auto mt-8">
      <form
        onSubmit={handleSubmit((data) => handleHeroSubmit(data, refreshHeroes))}
        className="space-y-6"
      >
        <h2 className="text-3xl font-extrabold text-white text-center">
          Add Your Superhero
        </h2>
        <div className="flex flex-col space-y-4">
          <label className="text-white text-lg">Name</label>
          <input
            type="text"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col space-y-4">
          <label className="text-white text-lg">Superpower</label>
          <input
            type="text"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("superpower")}
          />
          {errors.superpower && (
            <p className="text-red-500 text-sm">{errors.superpower.message}</p>
          )}
        </div>
        <div className="flex flex-col space-y-4">
          <label className="text-white text-lg">Humility (1 to 10)</label>
          <input
            type="text"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("humility")}
          />
          {errors.humility && (
            <p className="text-red-500 text-sm">{errors.humility.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-3 rounded-lg shadow-md hover:bg-yellow-400 transform transition duration-300 hover:scale-105"
        >
          Add Hero
        </button>
      </form>
    </div>
  );
}

export default HeroForm;
