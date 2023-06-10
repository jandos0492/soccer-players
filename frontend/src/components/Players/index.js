import React, { useEffect, useState } from "react";
import PlayerLink from "../PlayerLink";
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

  return (
    <div className="player-list">
      {players.map((player) => (
        <PlayerLink key={player.id} player={player} />
      ))}
    </div>
  )
}

export default Players;