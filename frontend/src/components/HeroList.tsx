import type { Hero } from "../interfaces/hero.interface";

function HeroList({ heroes }: { heroes: Hero[] }) {
  return (
    <div className="container mx-auto mt-8 p-6">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Superheroes List
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {heroes.map((hero) => (
          <div
            key={hero.id}
            className="bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-white">{hero.name}</h3>
            <p className="text-lg text-white mt-2 font-light italic">
              "{hero.superpower}"
            </p>
            <p className="text-lg text-white mt-2 font-semibold">
              Humility: {hero.humility}/10
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroList;
