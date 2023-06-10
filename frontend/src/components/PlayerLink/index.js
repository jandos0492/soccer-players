import React from "react";
import { Link } from "react-router-dom";
import "./PlayerLink.css";

const PlayerLink = ({ player }) => {
  return (
    <Link to={`/players/${player.no}`} className="player-link">
      <div className="player-info">
        <h4 className="playerNo">{player.no}</h4>
        <img src={`/${player.smallImageUrl}`} alt={player.name} className="player-image" />
      </div>
      <h2 className="player-name">{player.name}</h2>
    </Link>
  )
}

export default PlayerLink;
