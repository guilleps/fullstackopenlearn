import { useState } from "react";
import Button from "./Button";
import Title from "./Title";
import Statistics from "./Statistics";

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const countGood = () => {
    setGood(good + 1);
    setAll(all + 1);
  };

  const countNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };

  const countBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };

  const calcAverage = () => (all === 0 ? 0 : (good - bad) / all);
  const calcPositive = () => (all === 0 ? 0 : (good / all) * 100);

  return (
    <>
      <div>
        <Title text="give feedback" />

        <Button handleClick={countGood} text="good" />
        <Button handleClick={countNeutral} text="neutral" />
        <Button handleClick={countBad} text="bad" />

        <Title text="statistics" />

        <Statistics text="good" value={good} />
        <Statistics text="neutral" value={neutral} />
        <Statistics text="bad" value={bad} />

        <Statistics text="all" value={all} />
        <Statistics text="average" value={calcAverage()} />
        <Statistics text="positive" value={calcPositive()} symbol="%" />
      </div>
    </>
  );
};

export default App;
