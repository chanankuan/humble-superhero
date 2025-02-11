export interface Hero {
  id: number;
  name: string;
  superpower: string;
  humility: string;
  createdAt: string | number;
}

export type CreateHero = Pick<Hero, "name" | "superpower" | "humility">;
