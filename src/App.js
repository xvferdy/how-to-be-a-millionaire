import { useState, useEffect } from "react";
import "./App.css";
import Timer from "./helpers/Timer";
import Trivia from "./components/Trivia";
import questionsDb from "./helpers/questionsDb";
import moneyPyramid from "./helpers/moneyPyramid";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("Rp. 0");

  useEffect(() => {
    if (questionNumber > 1) {
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
    }
  }, [questionNumber]);

  const handelePlayAgain = () => {
    setStop(false);
    setQuestionNumber(1);
    setEarned("$ 0");
  };

  return (
    <div className="app">
      {/* MAIN */}

      <div className="main">
        {stop ? (
          <>
            <div className="game-over">
              <h1 className="end-text">You Earned {earned}</h1>
              <div className="end-button" onClick={handelePlayAgain}>
                Play Again
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer setStop={setStop} questionNumber={questionNumber} />
              </div>
            </div>
            <div className="top">
              <Trivia
                data={questionsDb}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                setStop={setStop}
                setEarned={setEarned}
                moneyPyramid={moneyPyramid}
              />
            </div>
          </>
        )}
      </div>

      {/* PYRAMID */}
      <div className="pyramid">
        <ul className="money-list">
          {moneyPyramid.map((money) => (
            <li
              className={
                questionNumber === money.id
                  ? "money-list-item active"
                  : "money-list-item"
              }
            >
              <span className="money-list-item-number">{money.id}</span>
              <span className="money-list-item-amount">{money.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
