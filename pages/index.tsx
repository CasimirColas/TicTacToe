import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Square from "../components/Square";

export default function Home() {
  const [player, setPlayer] = useState<0 | 1>(0);
  const [grid, setGrid] = useState(Array(9).fill(null));
  const [end, setEnd] = useState(false);
  function didWin(arr: string[]) {
    const condition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
    ];
    for (let i = 0; i < condition.length; i++) {
      const [a, b, c] = condition[i];
      if (
        arr[a] != null &&
        arr[b] != null &&
        arr[c] != null &&
        arr[a] === arr[b] &&
        arr[c] === arr[b]
      ) {
        return true;
      }
    }
    return false;
  }
  function handleClick(i: number) {
    if (end === false) {
      if (player === 0) {
        let newgrid = [...grid];
        if (newgrid[i] === null) {
          newgrid[i] = "X";
          setGrid(newgrid);
          setPlayer(1);
          if (didWin(grid)) {
            setEnd(true);
          }
        }
      } else if (player === 1) {
        let newgrid = [...grid];
        if (newgrid[i] === null) {
          newgrid[i] = "O";
          setGrid(newgrid);
          setPlayer(0);
          if (didWin(grid)) {
            setEnd(true);
          }
        }
      }
    }
  }
  return (
    <div className={styles.main}>
      <h1>Welcome to TicTacToe</h1>
      {end ? <h2>Player {player} lost</h2> : null}
      <button
        onClick={() => {
          setGrid(Array(9).fill(null));
          setPlayer(0);
          setEnd(false);
        }}
      >
        reset
      </button>
      <div className={styles.grid}>
        {grid.map((e, index) => (
          <Square
            key={index}
            value={grid[index]}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
