import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Game.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Game() {
  const [game, setGame] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [statusOfQuestion, setStatusOfQuestion] = useState(false);
  const [answer, setAnswer] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  
  const fetchData = async () => {
    const res = await axios.get("/api/game/" + id);
    setGame(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const checkAnswer = () => {
    // Logic to check the answer can be added here
    setStatusOfQuestion(true);
    setTimeout(() => {
      setStatusOfQuestion(false);
      if (currentQuestion < game.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        alert("Ты ошибся");
      }
    }, 2000); // Show the answer for 2 seconds
  };

  const nextQuestion = () => {
    if (currentQuestion < game.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      navigate("/Menu");
    }
  };

  return (
    <div className="main">
      <div className="second">
        <p>Квиз {id}</p>
        {game[currentQuestion]?.images && (
          <img className="imgr" src={game[currentQuestion]?.images} alt="Question visual" />
        )}
        <div>{game[currentQuestion]?.question}</div>
        <input 
          className="input" 
          value={answer} 
          onChange={handleAnswerChange} 
        />
        <button
          className="btn"
          onClick={checkAnswer}
        >
          Проверить
        </button>
        <div className={`answer ${statusOfQuestion ? 'visible' : ''}`}>
          {game[currentQuestion]?.answer}
        </div>
        <button
          className="btn"
          onClick={nextQuestion}
        >
          Вперед
        </button>
      </div>
    </div>
  );
}

export default Game;
