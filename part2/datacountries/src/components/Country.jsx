const Country = ({ country }) => {
    if (!country) { return null}
  //   console.log("from CountryComponente", country);
  //   console.log("languages", languages);
  //   console.log("languages", Object.values(languages));

  const countryName = country.name.common;
  const countryCapital = country.capital[0];
  const countryArea = country.area;
  const languages = country.languages;
  const flag = country.flags.png;

  return (
    <>
      <div>
        <h1>{countryName}</h1>
        <p>Capital {countryCapital} <br /> Area {countryArea}</p>

        <h2>Languages</h2>
        <ul>
          {Object.values(languages).map((l) => (
            <li>{l}</li>
          ))}
        </ul>

        <img src={flag} alt={countryName} />
      </div>
    </>
  );
};

export default Country;
