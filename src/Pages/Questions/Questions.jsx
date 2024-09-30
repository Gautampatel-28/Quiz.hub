import React, { useState } from "react";
import "./Questions.css";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage.jsx";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import he from 'he'; 

const Questions = ({
  currQues,
  setcurrQues,
  questions,
  options,
  correct,
  setScore,
  score,

}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return "select";
    } else if (selected === i && selected !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currQues >= questions.length - 1) {
      navigate("/result");
    } else if (selected) {
      setcurrQues(currQues + 1);
      setSelected(null);
      setError(false);
    } else {
      setError("Please select an option first");
    }
  };

  const handleQuit = () => {
    navigate("/Quiz.hub/");
  };


  const decodeEntities = (text) => {
    return he.decode(text);
  };

  return (
    <div className="question">
      <h1>Questions {currQues + 1}</h1>

      <div className="singleQuestion">
        <h2>{decodeEntities(questions[currQues].question)}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                onClick={() => handleCheck(i)}
                className={`singleOption ${selected && handleSelect(i)}`}
                key={i}
                disabled={selected}
              >
                {decodeEntities(i)} 
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
          className="btn1"
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            onClick={handleQuit}
          >
            Quit
          </Button>

          <Button
          className="btn2"
            variant="contained"
            size="large"
            color="primary"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            Next Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
