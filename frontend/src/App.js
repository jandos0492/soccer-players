import React from "react";
import { Route, Routes } from "react-router-dom";
import Players from "./components/Players";
import PlayerDetail from "./components/PlayerDetail";

function App() {
  return (
    <div>
      <h1 className="header">Best Soccer players in the world</h1>
      <div className="app">
        <div className="sidebar">
          <Players />
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/players/:id" element={<PlayerDetail />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

