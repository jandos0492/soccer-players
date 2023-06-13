import React, { createContext, useState, useEffect } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState(null);

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

  // Update Player
  const updatePlayer = (id, updatedData) => {
    return fetch(`/players/${id}/edit`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => {
        if (response.ok) {
          setPlayers((prevPlayers) =>
            prevPlayers.map((player) =>
              player.id === +id ? { ...player, ...updatedData } : player
            )
          );

          const updatedPlayer = { ...player, ...updatedData };
          setPlayer(updatedPlayer);
          return true;
        }
      })
      .catch((error) => {
        return false;
      });
  };



  return (
    <PlayerContext.Provider value={{ players, setPlayers, deletePlayer, updatePlayer, player, setPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};