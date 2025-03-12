import { useState } from "react";
import Button from "./Button";
import Title from "./Title";
import Stats from "./Stats";

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countGood = () => {
    const newValueGood = good + 1;
    setGood(newValueGood);
  };

  const countNeutral = () => {
    const newValueNeutral = neutral + 1;
    setNeutral(newValueNeutral);
  };

  const countBad = () => {
    const newValueBad = bad + 1;
    setBad(newValueBad);
  };

  return (
    <>
      <div>
        <Title text="give feedback" />

        <Button handleClick={countGood} text="good" />
        <Button handleClick={countNeutral} text="neutral" />
        <Button handleClick={countBad} text="bad" />

        <Title text="statistics" />

        <Stats text="good" value={good} />
        <Stats text="neutral" value={neutral} />
        <Stats text="bad" value={bad} />
      </div>
    </>
  );
};

export default App;
