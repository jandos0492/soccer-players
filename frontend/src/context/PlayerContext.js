import React, { createContext, useState } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);

  const addPlayer = (player) => {
    setPlayers((prevPlayers) => [...prevPlayers, player]);
  };

  const deletePlayer = (playerNo) => {
    setPlayers((prevPlayers) =>
      prevPlayers.filter((player) => player.no !== playerNo)
    );
  };

  const updatePlayer = (updatedPlayer) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.no === updatedPlayer.no ? updatedPlayer : player
      )
    );
  };

  return (
    <PlayerContext.Provider
      value={{ players, addPlayer, deletePlayer, updatePlayer }}
    >
      {children}
    </PlayerContext.Provider>
  );
};