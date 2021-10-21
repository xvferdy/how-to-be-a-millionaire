import React, { useState, useEffect } from "react";

function Trivia({
  data,
  questionNumber,
  setQuestionNumber,
  setStop,
  handleEarned,
}) {
  const [question, setQuestion] = useState(null);
  const [className, setClassName] = useState("answer");
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [cek, setCek] = useState("ok");

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");

    console.log(question.id);

    setTimeout(() => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    }, 200);

    setTimeout(() => {
      if (a.correct) {
        setQuestionNumber((prev) => prev + 1);
        setSelectedAnswer(null);
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