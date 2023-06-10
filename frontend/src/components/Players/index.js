import React, { useContext } from "react";
import PlayerLink from "../PlayerLink";
import "./Players.css";
import { PlayerContext } from "../../context/PlayerContext";

const Players = () => {
  const { players } = useContext(PlayerContext);

  return (
    <div className="player-list">
      {players.map((player) => (
        <PlayerLink key={player.id} player={player} />
      ))}
    </div>
  );
};

export default Players;