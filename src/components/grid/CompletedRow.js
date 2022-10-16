import * as React from "react";
import { getGuessStatuses } from "../../lib/statuses";
import { unicodeSplit } from "../../lib/words";
import { Cell } from "./Cell";
export const CompletedRow = ({ solution, guess, isRevealing }) => {
  const statuses = getGuessStatuses(solution, guess);
  const splitGuess = unicodeSplit(guess);
  return (
    <div className="mb-1 flex justify-center">
      {splitGuess.map((letter, i) => (
        <Cell
          key={i}
          value={letter}
          status={statuses[i]}
          position={i}
          isRevealing={isRevealing}
          isCompleted
        />
      ))}
    </div>
  );
};
