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

    return fetch(`/players/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setPlayers((prevPlayers) => 
            prevPlayers.filter((player) => player.id !== +id)
          );
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

  const addPlayer = (newPlayerData) => {
    return fetch("/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlayerData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to add the player");
        }
      })
      .then((responseData) => {
        setPlayers((prevPlayers) => [...prevPlayers, responseData]);
        console.log("Player added successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  }


  const providerValues = {
    players,
    setPlayers,
    deletePlayer,
    updatePlayer,
    player,
    setPlayer,
    addPlayer
  }

  return (
    <PlayerContext.Provider value={ providerValues }>
      {children}
    </PlayerContext.Provider>
  );
};