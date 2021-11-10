import React, { useState, useEffect, useContext } from "react";
import { GameStateContext } from "../helpers/Context";

function Trivia() {
  const {
    questionsDb,
    questionNumber,
    setQuestionNumber,
    setStop,
    setEarned,
    moneyPyramid,
  } = useContext(GameStateContext);

  const [question, setQuestion] = useState(null);
  const [className, setClassName] = useState("answer");
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    setQuestion(questionsDb[questionNumber - 1]);
  }, [questionsDb, questionNumber]);

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");

    setTimeout(() => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    }, 200);

    setTimeout(() => {
      if (a.correct && questionNumber < questionsDb.length) {
        // setQuestionNumber((prev) => prev + 1); //multiple click = setting up multiple state
        setQuestionNumber((prev) => questionNumber + 1);
        setSelectedAnswer(null);
      }
      //soal terakhir
      else if (a.correct) {
        setEarned(`${moneyPyramid[0].amount} !!!!!`);
        setSelectedAnswer(null);
        setStop(true);
      } else {
        setStop(true);
      }
    }, 1500);
  };

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((answer) => (
          <div
            className={selectedAnswer === answer ? className : "answer"}
            onClick={(e) => {
              handleClick(answer);
            }}
          >
            {answer.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trivia;
