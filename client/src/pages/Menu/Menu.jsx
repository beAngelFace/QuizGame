import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Menu.css";

function Menu({ theme }) {
  return (
    <div className="menu">
      <div className="game">
        <Link
          style={{ textDecoration: "none", color: "white", fontSize: "31px" }}
          to={`/game/${theme[0].id}`}
        >
          <div className="one">
            <p>Загадки</p>
          </div>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white", fontSize: "31px" }}
          to={`/game/${theme[1].id}`}
        >
          <div className="one">
            <p>Проверка зрительной памяти</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
