import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Quiz.css';
import Questions from '../Questions/Questions';


const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
  const [options, setOptions] = useState();
  const [currQues, setcurrQues] = useState(0);

  useEffect(() => {
    if (questions && questions.length > 0) {
      setOptions(
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
      );
    }
  }, [questions, currQues]);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <>
      <div className="quiz">
        <span className="subtitle">Welcome, {name}</span>

        {questions && questions.length > 0 && questions[currQues] ? (
          <>
            <div className="quizinfo">
              <span>{questions[currQues].category}</span>
              <span>Score: {score}</span>
            </div>

            <Questions
              currQues={currQues}
              setcurrQues={setcurrQues}
              questions={questions}
              options={options}
              correct={questions[currQues]?.correct_answer}
              score={score}
              setScore={setScore}
            />
          </>
        ) : (
          <CircularProgress
            style={{ margin: 100 }}
            color="inherit"
            size={150}
            thickness={1}
          />
        )}
      </div>
    </>
  );
};

export default Quiz;
