"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import CountryNotFound from "./componet/countryNotFound";
import CountryList from "./componet/countryList";
export default function HomePage() {
  const [queryResult, setqueryResult] = useState([]);
  const [querySearch, setQuerySearch] = useState("name");
  const [loading, setLocading] = useState(false);
  const [input, setInput] = useState();
  useEffect(() => {
    async function getAllCountry() {
      setLocading(true);
      try {
        const respond = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital,subregion,timezones"
        );
        setqueryResult(respond.data);
      } catch (error) {
        console.log(error);
        setqueryResult([]);
      } finally {
        setLocading(false);
      }
    }

    getAllCountry();
  }, []);

  async function useQuery() {
    if (input.length >= 3) {
      setLocading(true);
      try {
        let url = "";
        const userInput = input.toLowerCase();

        switch (querySearch) {
          case "name":
            url = `https://restcountries.com/v3.1/name/${userInput}`;
            break;
          case "region":
            url = `https://restcountries.com/v3.1/region/${userInput}`;
            break;
          case "subRegion":
            url = `https://restcountries.com/v3.1/subregion/${userInput}`;
            break;
          case "capitalCity":
            url = `https://restcountries.com/v3.1/capital/${userInput}`;
            break;
          case "language":
            url = `https://restcountries.com/v3.1/lang/${userInput}`;
            break;
          case "currency":
            url = `https://restcountries.com/v3.1/currency/${userInput}`;
            break;
          default:
            setqueryResult([]);
            return;
        }

        const respond = await axios.get(url);
        console.log(respond.data);

        setqueryResult(respond.data);
        console.log("done");
      } catch (error) {
        setqueryResult([]);
      } finally {
        setLocading(false);
      }
    } else {
      toast.error("Your Search Query should be 3 letter or more.");
    }
  }

  return (
    <>
      {" "}
      <ToastContainer />
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

          <div className="w-full md:w-auto">
            <button
              onClick={useQuery}
              className="w-full h-full px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition-all duration-200"
            >
              🔎 Search
            </button>
          </div>
        </section>
        {loading ? (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-6 lg:px-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </section>
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-6 lg:px-12">
            {queryResult.length > 0 ? (
              <CountryList queryResult={queryResult} />
            ) : (
              <CountryNotFound />
            )}
          </section>
        )}
      </main>
    </>
  );
}

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all animate-pulse">
      {/* Image Placeholder */}
      <div className="relative h-64 bg-gray-300">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 rounded-t-2xl"></div>
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="h-6 bg-gray-400 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-400 rounded w-1/2"></div>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-6 space-y-4">
        <div className="h-5 bg-gray-300 rounded w-1/2"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-black">
          <div className="h-8 w-24 bg-gray-300 rounded-full"></div>
          <div className="h-4 w-12 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
}
