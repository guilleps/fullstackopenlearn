import { useState } from "react";

const Button = ({ handleClick, textButton }) => <button onClick={handleClick}>{textButton}</button>;

const Title = ({ text }) => <h1>{text}</h1>;

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0));
  console.log("votes", vote);

  const [mostVote, setMostVote] = useState(0);

  const randomAnecdote = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  };

  const addVote = (position) => {
    setVote(prevVotes => {
      const newVotes = [...prevVotes];
      newVotes[position] += 1;
  
      const index = newVotes.indexOf(Math.max(...newVotes));
      setMostVote(index);
      return newVotes;
    });
  };

  return (
    <>
      <Title text="Anecdote of the day" />
      <p>
        {anecdotes[selected]} <br /> has {vote[selected]} votes
      </p>
      <Button handleClick={() => addVote(selected)} textButton="vote" />
      <Button handleClick={randomAnecdote} textButton="next anecdote" />

      <Title text="Anecdote with the most votes" />
      {mostVote > 0 ? (
        <p>
          {anecdotes[mostVote]} <br /> has {vote[mostVote]} votes
        </p>
      ) : (
        <p>No votes yet</p>
      )}
    </>
  );
};

export default App;
