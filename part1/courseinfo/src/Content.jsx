function Content(prop) {
  const part1 = "Fundamentals of React";
  const exercises1 = prop.exs1;
  const part2 = "Using props to pass data";
  const exercises2 = prop.exs2;
  const part3 = "State of a component";
  const exercises3 = prop.exs3;

  return (
    <>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
    </>
  );
}

export default Content;
