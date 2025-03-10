function Total(props) {
  const result = props.exs1 + props.exs2 + props.exs3;

  console.log(`Total exercises ${result} from Total component`);

  return (
    <>
      <p>Number of exercises {result}</p>
    </>
  );
}

export default Total;
