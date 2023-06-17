import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Players from "./components/Players";
import PlayerDetail from "./components/PlayerDetail";
import CreatePlayerModal from "./components/CreatePlayerModal";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faCirclePlus);

function App() {

  const [createModalOpen, setCreateModalOpen] = useState(false);

  const handleCreate = () => {
    if (createModalOpen) {
      setCreateModalOpen(false);
    } else {
      setCreateModalOpen(true);
    }
  }

  return (
    <div className={createModalOpen ? "create-modal-open" : ""}>
      <div className="header">
        <img src="/images/ball/ball.png" alt="" />
        <h1 className="header">Best Soccer players in the world</h1>
      </div>
      <div className="app">
        <div className="sidebar">
          <Players />
        </div>
        <button className="create-player-button" onClick={handleCreate}>
          <FontAwesomeIcon className="plus-icon" icon="fa-solid fa-circle-plus" />
        </button>
        <div className="create-form">
          {createModalOpen && (
            <CreatePlayerModal
              setCreateModalOpen={setCreateModalOpen}
            />
          )}
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

