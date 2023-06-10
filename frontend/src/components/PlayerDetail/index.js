import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PlayerDetail.css";
import EditPlayerModal from "../EditPlayerModal";

const PlayerDetail = () => {
  const [player, setPlayer] = useState(null);
  const { no } = useParams();
  console.log(no);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const navigate = useNavigate();

  // Getting the player from the db;
  useEffect(() => {
    fetch(`/players/${no}`)
      .then((response) => response.json())
      .then((data) => {
        setPlayer(data);
      })
      .catch((error) => console.error(error));
  }, [no]);

  const handleEdit = () => {
    setEditModalOpen(true);
  };


  // Delete the player
  const handleDelete = () => {
    fetch(`/players/${no}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          navigate("/players");
        }
      })
      .catch((error) => {
        console.error(error);
      })
  }

  if (!player) {
    return <div>Loading...</div>
  }

  return (
    <div className="player-detail">
      <img src={`/${player.largeImageUrl}`} alt={player.name} className="player-image" />
      <h2 className="player-name">{player.name}</h2>
      <p className="player-info">Age: {player.age}</p>
      <p className="player-info">Position: {player.position}</p>
      <p className="player-info">Country: {player.country}</p>
      <p className="player-info">Club: {player.club}</p>
      <p className="player-bio">{player.bio}</p>
      <p className="player-bio-author">Author of the Bio: {player.bioAuthor}</p>

      <div className="buttons">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default PlayerDetail;

