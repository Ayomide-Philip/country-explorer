"use client";
import axios from "axios";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import LoadingCircleSpinner from "../componet/spinner";
import Detail from "../componet/detail";
export default function Page({ params }) {
  const { country } = use(params);
  const [responds, setResponds] = useState(null);

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

  if (responds === null) {
    return <LoadingCircleSpinner />;
  }
  return (
    <div className="max-w-6xl mx-auto p-6 sm:p-10 bg-gray-900 text-gray-100 rounded-3xl shadow-2xl space-y-12">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img
          src={responds.flags.png}
          alt={responds.flags.alt || `${responds.name.common} flag`}
          className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-md"
        />

        <div className="text-center md:text-left space-y-2">
          <h1 className="text-4xl font-bold flex items-center justify-center md:justify-start gap-3">
            {responds.name.common}
            <span className="text-3xl">{responds.flag}</span>
          </h1>
          <p className="text-green-400 text-lg">{responds.name.official}</p>
          <p className="text-sm text-white italic">
            {responds.unMember ? "United Nations Member" : "Not a UN Member"}
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-10 text-base">
        <div className="space-y-3">
          <Detail label="Capital" value={responds.capital?.[0]} />
          <Detail label="Region" value={responds.region} />
          <Detail label="Subregion" value={responds.subregion} />
          <Detail
            label="Population"
            value={responds.population?.toLocaleString()}
          />
          <Detail
            label="Area"
            value={`${responds.area?.toLocaleString()} km²`}
          />
          <Detail
            label="Languages"
            value={
              responds.languages
                ? Object.values(responds.languages).join(", ")
                : "N/A"
            }
          />
          <Detail
            label="Currencies"
            value={
              responds.currencies
                ? Object.values(responds.currencies)
                    .map((c) => `${c.name} (${c.symbol})`)
                    .join(", ")
                : "N/A"
            }
          />
        </div>

        <div className="space-y-3">
          <Detail
            label="Demonyms"
            value={`${responds.demonyms?.eng?.m} / ${responds.demonyms?.eng?.f}`}
          />
          <Detail label="Driving Side" value={responds.car?.side} />
          <Detail label="Timezones" value={responds.timezones?.join(", ")} />
          <Detail label="Start of Week" value={responds.startOfWeek} />
          <Detail
            label="Google Maps"
            value={
              <a
                href={responds.maps?.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 underline"
              >
                View
              </a>
            }
          />
          <Detail
            label="OpenStreetMap"
            value={
              <a
                href={responds.maps?.openStreetMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 underline"
              >
                View
              </a>
            }
          />
        </div>
      </div>

      {responds.coatOfArms?.png && (
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold text-gray-300">Coat of Arms</h2>
          <img
            src={responds.coatOfArms.png}
            alt={`${responds.name.common} coat of arms`}
            className="h-40 mx-auto rounded-lg shadow-lg"
          />
        </div>
      )}

      <div className="text-center">
        <Link
          href="/"
          className="inline-block mt-8 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
        >
          ← Back to all countries
        </Link>
      </div>
    </div>
  );
}
