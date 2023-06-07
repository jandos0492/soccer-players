import React, { useEffect, useState } from "react";
import PlayerCard from "../PlayerCard";
import "./Players.css";

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Getting all the players from the db
    fetch("/players")
      .then((response) => response.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error(console.error()));
  }, []);

  return <div className="players-container">
    <h1>Players</h1>
    <div className="grid">
      {players.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  </div>
}

export default Players;