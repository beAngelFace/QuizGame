import React from "react";
import { useEffect } from "react";
import { Routes, Link, Route } from "react-router-dom";
import Footer from "../Footer/Footer";
import Game from "../Game/Game";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Welcome from "../Welcome/Welcome";
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const fetchData = async () => {
    const res = await axios.get("/api/items");
    setTheme(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [theme, setTheme] = useState([]);

  return (
    <>
      <div className="general">
        <Header></Header>
        <Footer></Footer>
      </div>
      <Routes>
        <Route path={"/"} element={<Welcome />} />
        <Route path={"/menu"} element={<Menu theme={theme} />} />
        <Route path={`/game/:id`} element={<Game />} />
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
