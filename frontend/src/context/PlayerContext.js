import React, { createContext, useState, useEffect } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("/players")
      .then((response) => response.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error(error));
  }, []);

  const deletePlayer = (id) => {
    console.log("Deleting player:", id);

    return fetch(`/players/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setPlayers((prevPlayers) => 
            prevPlayers.filter((player) => player.id !== +id)
          );
          console.log("Player deleted successfully");
          return true;
        }
        throw new Error("Failed to delete player");
      })
      .catch((error) => {
        console.error(error);
        return false;
      })
  }

  return (
    <PlayerContext.Provider value={{ players, deletePlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};