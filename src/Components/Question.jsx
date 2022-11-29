import React from "react";
import Card from "./Card";



const Question = ({
  questionIndex,
  setQuestionIndex,
  questions,
  setShowQuestionsPage,
  setShowFinalPage,
  score,
  setScore,
}) => {
  const handleClick = (isCorrect) => {
    if (questionIndex < 7) {
      if (isCorrect) {
        setScore((score) => (score += 100));
      }

      setQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      if (isCorrect) {
        setScore((score) => (score += 100));
      }

      setShowQuestionsPage(false);
      setShowFinalPage(true);
    }
  };

  return (
    <Card>
      <h3 className="question">{questions[questionIndex].questionText}</h3>

      <div className="answers">
        {questions[questionIndex].answers.map((answer, i) => (
          <div
            key={i}
            className="answer"
            onClick={() => handleClick(answer.correctAnswer)}
          >
            <p>{answer.answerText}</p>
          </div>
        ))}
      </div>

      <p className="score">
        Score: <span>{score}</span>
      </p>

      <p className="question_number">
        Question <span>{questionIndex + 1}</span>/8
      </p>
    </Card>
  );
};

export default Question;