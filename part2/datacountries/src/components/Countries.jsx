const Countries = ({ countries }) => {
  return (
    <>
      {countries.map((c, i) => (
        <p key={i}>{c.name.common}</p>
      ))}
    </>
  );
};

export default Countries;
