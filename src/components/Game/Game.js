import React from "react";
import GuessResults from "../GuessResults/GuessResults";
import GuessInput from "../GuessInput/GuessInput";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = React.useState([]);

  function handleNewGuess(guess) {
    const newResult = {
      guess,
      id: crypto.randomUUID(),
    };

    const nextResults = [...results, newResult];
    setResults(nextResults);
  }

  return (
    <>
      <GuessResults results={results} />
      <GuessInput handleNewGuess={handleNewGuess} />
    </>
  );
}

export default Game;
