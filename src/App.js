import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Result from "./Pages/Result/Result";
import Quiz from "./Pages/Quiz/Quiz";
import { useState } from "react";
import axios from "axios";
import React from "react";

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState("");
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    try {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10&type=multiple${
        category && `&category=${category}`}
        ${difficulty && `&difficulty=${difficulty}`}&type=multiple`
      );
      console.log(data);
      setQuestions(data.results);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  return (
    <>
      <BrowserRouter>
        <div
          className="app"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/ques1.png)` }}

        >
          <Header />

          <Routes>
            <Route
              path="/Quiz.hub/"
              element={
                <Home
                  name={name}
                  setName={setName}
                  fetchQuestions={fetchQuestions}
                />
              }
            />
            <Route path="/quiz" element={<Quiz 
            name={name}
            questions={questions}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
            />} />
            <Route path="/result" element={<Result 
              name={name}
              score={score}
            />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
