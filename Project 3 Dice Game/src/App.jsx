import React, { useState } from "react";
import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";

const App = () => {
  const [isGameStart, setIsGameStart] = useState(true);

  function gameStartHandler() {
    setIsGameStart((prev) => !prev);
  }

  return (
    <>{isGameStart ? <GamePlay /> : <StartGame toggle={gameStartHandler} />}</>
  );
};

export default App;
