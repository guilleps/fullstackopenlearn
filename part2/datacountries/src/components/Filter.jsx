const Filter = ({ filterName, handleFilterName }) => {
  return (
    <>
      <p>
        find countries <input value={filterName} onChange={handleFilterName} />
      </p>
    </>
  );
};

export default Filter;
