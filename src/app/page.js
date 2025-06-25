export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white px-4 py-8">
      <header className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        <h1 className="text-3xl font-bold">🌍 Country Explorer</h1>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Search by country name..."
            className="px-4 py-2 rounded-lg border w-full sm:w-64 bg-white dark:bg-gray-800"
          />

          <select className="px-4 py-2 rounded-lg border bg-white dark:bg-gray-800">
            <option>Filter by Region</option>
          </select>
        </div>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Static Country Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:scale-[1.02] transition-transform overflow-hidden">
          <img
            src="https://flagcdn.com/w320/ng.png"
            alt="Nigeria"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">Nigeria</h2>
            <p>
              <strong>Population:</strong> 200,000,000
            </p>
            <p>
              <strong>Region:</strong> Africa
            </p>
            <p>
              <strong>Capital:</strong> Abuja
            </p>
          </div>
        </div>

        {/* Add more cards manually for now */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:scale-[1.02] transition-transform overflow-hidden">
          <img
            src="https://flagcdn.com/w320/fr.png"
            alt="France"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">France</h2>
            <p>
              <strong>Population:</strong> 67,000,000
            </p>
            <p>
              <strong>Region:</strong> Europe
            </p>
            <p>
              <strong>Capital:</strong> Paris
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
