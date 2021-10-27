import React, { useState, useEffect } from "react";

function Trivia({
  data,
  questionNumber,
  setQuestionNumber,
  setStop,
  setEarned,
  moneyPyramid,
}) {
  const [question, setQuestion] = useState(null);
  const [className, setClassName] = useState("answer");
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");

    setTimeout(() => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    }, 200);

    setTimeout(() => {
      if (a.correct && questionNumber < data.length) {
        setQuestionNumber((prev) => prev + 1);
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
