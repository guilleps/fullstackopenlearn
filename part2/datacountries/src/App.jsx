import { useEffect, useState } from "react";
import countryService from "./services/countries";
import Country from "./components/Country";
import Filter from "./components/Filter";
import Countries from "./components/Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    countryService
      .getAllCountries()
      .then((countryData) => setCountries(countryData));
  }, []);
  // console.log(countries);

  const handleFilterName = (event) =>
    setFilterName(event.target.value.toLowerCase());

  const searchCountries = filterName
    ? countries.filter((c) => c.name.common.toLowerCase().includes(filterName))
    : countries;

  const validQuantityCountriesFilter =
    searchCountries.length > 10 && filterName;

  const uniqueCountry =
    searchCountries.length === 1 ? searchCountries[0] : null;
  // console.log(uniqueCountry);

  return (
    <>
      <Filter filterName={filterName} handleFilterName={handleFilterName} />

      {validQuantityCountriesFilter ? (
        <p>Too many matches, specify another filter</p>
      ) : uniqueCountry ? (
        <Country country={uniqueCountry} />
      ) : (
        <Countries countries={searchCountries} />
      )}
    </>
  );
}

export default App;
