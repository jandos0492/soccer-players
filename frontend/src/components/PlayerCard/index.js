import React from "react";
import "./PlayerCard.css";

const PlayerCard = ({ player }) => {
  return (
    <div className="player-card">
      <img src={player.smallImageUrl} alt={player.name} />
      <h2>{player.name}</h2>
      <p>{player.no}</p>
    </div>
  )
}

export default PlayerCard;