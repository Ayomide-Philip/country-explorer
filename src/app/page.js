export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white px-6 py-10">
      <header className="mb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-center">
          🌍 Country Explorer
        </h1>
      </header>

      <section className="w-full max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
        <input
          type="text"
          placeholder="🔍 Search for a country..."
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select className="sm:w-48 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option>🌐 Filter by Region</option>
          <option>Africa</option>
          <option>Europe</option>
          <option>Asia</option>
          <option>Americas</option>
          <option>Oceania</option>
        </select>
        <button className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-200">
          Search
        </button>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {[
          {
            name: "Nigeria",
            flag: "https://flagcdn.com/w320/ng.png",
            population: "200,000,000",
            region: "Africa",
            capital: "Abuja",
          },
          {
            name: "France",
            flag: "https://flagcdn.com/w320/fr.png",
            population: "67,000,000",
            region: "Europe",
            capital: "Paris",
          },
        ].map((country) => (
          <div
            key={country.name}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300 overflow-hidden"
          >
            <img
              src={country.flag}
              alt={country.name}
              className="w-full h-44 object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold mb-3">{country.name}</h2>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Population:</strong> {country.population}
                </li>
                <li>
                  <strong>Region:</strong> {country.region}
                </li>
                <li>
                  <strong>Capital:</strong> {country.capital}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
