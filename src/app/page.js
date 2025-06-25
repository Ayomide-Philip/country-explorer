"use client";
import { useState, useEffect } from "react";
import axios from "axios";
export default function HomePage() {
  const [queryResult, setqueryResult] = useState([]);
  const [querySearch, setQuerySearch] = useState("name");
  const [input, setInput] = useState();
  useEffect(() => {
    async function getAllCountry() {
      try {
        const respond = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital,subregion,timezones"
        );
        setqueryResult(respond.data);
      } catch (error) {
        console.log(error);
        setqueryResult([]);
      }
    }
    getAllCountry();
  }, []);

  async function useQuery() {
    try {
      let url = "";
      switch (querySearch) {
        case "name":
          url = `https://restcountries.com/v3.1/name/${input}`;
          break;
        case "region":
          url = `https://restcountries.com/v3.1/region/${input}`;
          break;
        case "subRegion":
          url = `https://restcountries.com/v3.1/subregion/${input}`;
          break;
        case "capitalCity":
          url = `https://restcountries.com/v3.1/capital/${input}`;
          break;
        case "language":
          url = `https://restcountries.com/v3.1/lang/${input}`;
          break;
        case "currency":
          url = `https://restcountries.com/v3.1/currency/${input}`;
          break;
        default:
          setqueryResult([]);
          return;
      }

      const respond = await axios.get(url);
      setqueryResult(respond.data);
    } catch (error) {
      setqueryResult([]);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6 py-10">
      <header className="mb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-center">
          🌍 Country Explorer
        </h1>
      </header>

      <section className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-stretch gap-4 mb-12 px-4">
        <div className="flex-1 relative">
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            placeholder="🔍 Search for a country..."
            className="w-full h-full px-5 py-3 rounded-lg border border-gray-300  bg-gray-800 placeholder-gray-400  text-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
          />
        </div>

        {/* Select Field */}
        <div className="w-full md:w-52">
          <select
            name="query"
            onChange={(e) => setQuerySearch(e.target.value)}
            className="w-full h-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
          >
            <option value="name">🔤 Name</option>
            <option value="currency">💱 Currency</option>
            <option value="language">🗣️ Language</option>
            <option value="capitalCity">🏛️ Capital City</option>
            <option value="region">🌍 Region</option>
            <option value="subRegion">🗺️ Subregion</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="w-full md:w-auto">
          <button
            onClick={useQuery}
            className="w-full h-full px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition-all duration-200"
          >
            🔎 Search
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-6 lg:px-12">
        {queryResult.map((country) => (
          <div
            key={country.name.common}
            className="bg-white  rounded-2xl shadow-2xl overflow-hidden transform transition-all"
          >
            <div className="relative h-64">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${country.flags.png})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 rounded-t-2xl"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h2 className="text-2xl font-bold text-white leading-tight">
                    {country.name.official}
                  </h2>
                  <p className="text-sm text-white opacity-90">
                    {country.region} — {country.subregion || "Unknown"}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-lg font-semibold text-black">
                Capital: {country.capital?.[0] || "N/A"}
              </h3>
              <p className="text-black text-sm leading-relaxed">
                <strong>Population:</strong>{" "}
                {country.population.toLocaleString()} <br />
                <strong>Timezone:</strong> {country.timezones?.[0] || "N/A"}
              </p>

              <div className="flex justify-between items-center pt-4 border-t border-black">
                <button className="bg-green-800 text-white py-2 px-5 rounded-full text-sm font-medium shadow hover:bg-green-900 transition-all">
                  Learn More
                </button>
                <span className="text-xs text-black">
                  {country.name.common}
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
