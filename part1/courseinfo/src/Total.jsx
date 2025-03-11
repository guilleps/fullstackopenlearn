function Total({ parts }) {
  // console.log(parts);

  const result = parts[0].exercises + parts[1].exercises + parts[2].exercises;

  console.log(`Total exercises ${result} from Total component`);

  return (
    <>
      <p>Number of exercises {result}</p>
    </>
  );
}

export default Total;
