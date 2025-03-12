const Statistics = ({ text, value, symbol }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>
          {value} {symbol}
        </td>
      </tr>
    </>
  );
};

export default Statistics;
