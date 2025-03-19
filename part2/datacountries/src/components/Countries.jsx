import { useState } from "react";
import Country from "./Country";
import countryService from "../services/countries";

const Countries = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  //   console.log(selectedCountry);

  const handleShowCountry = (name) => {
    countryService
      .getCountryByName(name)
      .then((countryData) => setSelectedCountry(countryData));
  };

  return (
    <>
      {countries.map((c, i) => (
        <p key={i}>
          {c.name.common}{" "}
          <button onClick={() => handleShowCountry(c.name.common)}>Show</button>
        </p>
      ))}

      {selectedCountry && <Country country={selectedCountry} />}
    </>
  );
};

export default Countries;
