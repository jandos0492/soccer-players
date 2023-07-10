import React from "react";
import { Route, Routes } from "react-router-dom";
import Players from "./components/Players";
import PlayerDetail from "./components/PlayerDetail";
import DefaultRoute from "./components/DefaultRoute";

function App() {

  return (
    <div>
      <div className="header">
        <img src="/images/ball/ball.png" alt="" />
        <h1 className="header">Best Soccer players in the world</h1>
      </div>
      <div className="app">
        <div className="sidebar">
          <Players />
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/:id" element={<PlayerDetail />} />
            <Route path="*" element={<DefaultRoute />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
