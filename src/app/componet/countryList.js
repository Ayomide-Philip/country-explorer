import Link from "next/link";
export default function CountryList({ queryResult }) {
  return queryResult.map((country) => (
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
          <strong>Population:</strong> {country.population.toLocaleString()}{" "}
          <br />
          <strong>Timezone:</strong> {country.timezones?.[0] || "N/A"}
        </p>

        <div className="flex justify-between items-center pt-4 border-t border-black">
          <Link
            href={`/${country.name.common}`}
            className="bg-green-800 text-white py-2 px-5 rounded-full text-sm font-medium shadow hover:bg-green-900 transition-all"
          >
            Learn More
          </Link>
          <span className="text-xs text-black">{country.name.common}</span>
        </div>
      </div>
    </div>
  ));
}


