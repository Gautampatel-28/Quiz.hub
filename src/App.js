import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Result from './Pages/Result/Result';
import Quiz from './Pages/Quiz/Quiz';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");

  const fetchQuestions = () => {

  }
  console.log(fetchQuestions)

  return (
    <>
      <BrowserRouter>
        <div className="app" style={{ backgroundImage: "url('/assets/ques1.png')" }}>
          <Header />

          <Routes>
            <Route path="/" element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
