import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Game.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Game() {
  const [game, setGame] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [statusOfQustion, setStatusOfQuestion] = useState(false);
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

  return (

      <div className="main">
        <div className="second">
          <p>Викторина{id}</p>
          <img className='imgr' src={game[currentQuestion]?.images}/>
          <div>{game[currentQuestion]?.question}</div>
          <input className="input"></input>
          
         
          <button className='btn' onClick={()=> { 
            if (currentQuestion < game.length-1){
              setCurrentQuestion((prev)=> prev +1 )


            } else {
              alert("Ты ошибся");
            }
          }}
        >
          Проверить
        </button>
        <div
          style={{
            opacity: statusOfQustion ? 1 : 0,
            transition: "opacity 0.7s ease-in-out",
          }}
        >
          {game[currentQuestion]?.answer}
        </div>
        <button className="btn"
          onClick={() => {
            if (currentQuestion < game.length - 1) {
              setCurrentQuestion((prev) => prev + 1);
            } else {
              navigate("/Menu");
            }
          }}
        >
          Дальше
        </button>
      </div>
    </div>
  );
}

export default Game;
