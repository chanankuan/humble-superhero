import axios from "axios";
import { Hero } from "../interfaces/hero.interface";

async function findHeroes(): Promise<Hero[]> {
  const response = await axios.get("http://localhost:3000/api/superheroes");
  return response.data;
}

async function createHero(
  formData: Pick<Hero, "name" | "superpower" | "humility">
): Promise<Hero> {
  const response = await axios.post(
    "http://localhost:3000/api/superheroes",
    formData
  );
  return response.data;
}

export default { findHeroes, createHero };
