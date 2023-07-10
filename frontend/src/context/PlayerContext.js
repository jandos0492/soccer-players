import React, { createContext, useState, useEffect } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    fetch("api/")
      .then((response) => response.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error(error));
  }, []);

  const deletePlayer = (id) => {
    return new Promise((resolve, reject) => {
      fetch(`api/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            setPlayers((prevPlayers) => prevPlayers.filter((player) => player.id !== +id));
            resolve(true);
          } else {
            throw new Error("Failed to delete player");
          }
        })
        .catch((error) => {
          console.error(error);
          reject(false);
        });
    });
  };


  // Update Player
  const updatePlayer = (id, updatedData) => {
    return fetch(`api/${id}/edit`, {
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

  const createPlayer = async (playerData) => {
    const response = await fetch("api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playerData),
    });

    if (response.ok) {
      const createdPlayer = await response.json();
      setPlayers([...players, createdPlayer]);
      return createdPlayer;
    } else {
      throw new Error("Failed to create player");
    }
  };



  const providerValues = {
    players,
    setPlayers,
    deletePlayer,
    updatePlayer,
    player,
    setPlayer,
    createPlayer,
  }

  return (
    <PlayerContext.Provider value={providerValues}>
      {children}
    </PlayerContext.Provider>
  );
};