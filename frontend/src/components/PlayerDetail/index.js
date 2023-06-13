import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PlayerDetail.css";
import EditPlayerModal from "../EditPlayerModal";
import { PlayerContext } from "../../context/PlayerContext";

const PlayerDetail = () => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { deletePlayer, players, player, setPlayer } = useContext(PlayerContext);

  useEffect(() => {
    fetch(`/players/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setEditModalOpen(false);
        setPlayer(data);
      })
      .catch((error) => console.error(error));
  }, [id]);


  const handleDelete = () => {
    const playerIndex = players.findIndex((play) => play.id === +id);
    const nextPlayerId = playerIndex !== players.length - 1 ? players[playerIndex + 1].id : players[0].id;

    deletePlayer(id)
      .then((success) => {
        if (success) {
          navigate(`/players/${nextPlayerId}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const image = () => {
    if (player.largeImageUrl.startsWith("http")) {
      return player.largeImageUrl;
    } else {
      return `/${player.largeImageUrl}`;
    }
  }

  // Full Logic of the Edit button 
  const handleEdit = () => {
    if (editModalOpen) {
      setEditModalOpen(false);
    } else {
      setEditModalOpen(true);
    }
  }


  if (!player) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`player-detail${editModalOpen ? " modal-open" : ""}`}>
      <img src={image()} alt={player.name} className="player-image" />
      <div className="buttons">
        <button className="button edit-button" onClick={handleEdit} >Edit</button>
        <button className="button delete-button" onClick={handleDelete}>Delete</button>
      </div>
      {editModalOpen && (
        <div className="edit-form">
          <EditPlayerModal
            editModalOpen={editModalOpen}
            setEditModalOpen={setEditModalOpen}
            player={player}
          />
        </div>
      )}
      <h2 className="player-name">{player.name}</h2>
      <p className="player-info">Age: {player.age}</p>
      <p className="player-info">Position: {player.position}</p>
      <p className="player-info">Country: {player.country}</p>
      <p className="player-info">Club: {player.club}</p>
      <p className="player-bio">{player.bio}</p>
      <p className="player-bio-author">Author of the Bio: {player.bioAuthor}</p>

    </div>
  );
};

export default PlayerDetail;
