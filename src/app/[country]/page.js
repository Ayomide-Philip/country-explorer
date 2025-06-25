"use client";
import axios from "axios";
import { use, useEffect, useState } from "react";

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

  return <h1>{responds ? responds.name.common : null}</h1>;
}
