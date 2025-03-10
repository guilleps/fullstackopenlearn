function Total({ exs1, exs2, exs3 }) {
  const result = exs1 + exs2 + exs3;

  console.log(`Total exercises ${result} from Total component`);

  return (
    <>
      <p>Number of exercises {result}</p>
    </>
  );
}

export default Total;
