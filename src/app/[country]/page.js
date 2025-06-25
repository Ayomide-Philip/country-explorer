"use client";
import axios from "axios";
import { use, useEffect, useState } from "react";
import { motion, Variants } from "motion/react";
import LoadingCircleSpinner from "../componet/spinner";
import Link from "next/link";

export default function Page({ params }) {
  const { country } = use(params);
  const [responds, setResponds] = useState(null);

  const dotVariants = {
    jump: {
      y: -30,
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    async function getCountryInfo() {
      try {
        const respond = await axios.get(
          `https://restcountries.com/v3.1/name/${country}?fullText=true`
        );
        setResponds(respond.data[0]);
      } catch (error) {
        setResponds({});
      }
    }
    getCountryInfo();
  }, [country]);

  if (responds == null) {
    return <LoadingCircleSpinner />;
  }
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 bg-gray-900 rounded-2xl shadow-xl text-gray-100">
      {/* Flag */}
      <div className="overflow-hidden rounded-xl shadow-lg mb-8">
        <img
          src={responds.flags.png}
          alt={responds.flags.alt || `${responds.name.common} flag`}
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Country Name + Emoji Flag */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-1 flex justify-center items-center gap-2">
          {responds.name.common}
          <span className="text-3xl">{responds.flag}</span>
        </h1>
        <p className="text-lg text-white font-medium">
          {responds.name.official}
        </p>
      </div>

      {/* Info Grid */}
      <div className="grid md:grid-cols-2 gap-8 text-base leading-relaxed">
        <div className="space-y-2">
          <p>
            <span className="font-semibold">Capital:</span>{" "}
            {responds.capital?.[0] || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {responds.region}
          </p>
          <p>
            <span className="font-semibold">Subregion:</span>{" "}
            {responds.subregion || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Population:</span>{" "}
            {responds.population.toLocaleString()}
          </p>
          <p>
            <span className="font-semibold">Area:</span>{" "}
            {responds.area.toLocaleString()} km²
          </p>
          <p>
            <span className="font-semibold">Languages:</span>{" "}
            {responds.languages
              ? Object.values(responds.languages).join(", ")
              : "N/A"}
          </p>
          <p>
            <span className="font-semibold">Currencies:</span>
            {responds.currencies
              ? Object.values(responds.currencies)
                  .map((c) => `${c.name} (${c.symbol})`)
                  .join(", ")
              : "N/A"}
          </p>
          <p>
            <span className="font-semibold">Demonyms:</span>{" "}
            {responds.demonyms?.eng?.m} / {responds.demonyms?.eng?.f}
          </p>
        </div>

        <div className="space-y-2">
          <p>
            <span className="font-semibold">Driving Side:</span>{" "}
            {responds.car?.side || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Timezones:</span>{" "}
            {responds.timezones?.join(", ")}
          </p>
          <p>
            <span className="font-semibold">Start of Week:</span>{" "}
            {responds.startOfWeek || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Google Maps:</span>{" "}
            <Link
              href={responds.maps?.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              View
            </Link>
          </p>
          <p>
            <span className="font-semibold">OpenStreetMap:</span>{" "}
            <Link
              href={responds.maps?.openStreetMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              View
            </Link>
          </p>
          <p>
            <span className="font-semibold">UN Member:</span>{" "}
            {responds.unMember ? "Yes" : "No"}
          </p>
        </div>
      </div>

      {responds.coatOfArms?.png && (
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Coat of Arms</h2>
          <img
            src={responds.coatOfArms.png}
            alt={`${responds.name.common} coat of arms`}
            className="h-40 mx-auto rounded-md shadow-lg"
          />
        </div>
      )}

      <div className="mt-12 text-center">
        <Link
          href="/"
          className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          ← Back to all countries
        </Link>
      </div>
    </div>
  );
}
