import React from "react";
import { Route, Routes } from "react-router-dom";
import Players from "./components/Players";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/players" element={<Players />} />
      </Routes>
    </div>
  );
}

export default App;