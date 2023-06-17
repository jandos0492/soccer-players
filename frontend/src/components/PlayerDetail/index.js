import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PlayerDetail.css";
import EditPlayerModal from "../EditPlayerModal";
import { PlayerContext } from "../../context/PlayerContext";

const PlayerDetail = () => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
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
  }, [id, setPlayer]);

  const handleDelete = () => {
    if (!editModalOpen && !deleteConfirmationOpen) {
      setDeleteConfirmationOpen(true);
    }
  }


  const handleConfirmDelete = () => {
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

      setDeleteConfirmationOpen(false);
  };

  const handleCancelDelete = () => {
    setDeleteConfirmationOpen(false);
  }

  const image = () => {
    if (player.largeImageUrl.startsWith("http")) {
      return player.largeImageUrl;
    } else {
      return `/${player.largeImageUrl}`;
    }
  }

  const handleEdit = () => {
    if (!editModalOpen && !deleteConfirmationOpen) {
      setEditModalOpen(true);
    }
  }


  if (!player) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`player-detail${editModalOpen ? " edit-modal-open" : ""} 
          ${deleteConfirmationOpen ? " delete-confirmation-open" : ""}`}>
      <img src={image()} alt={player.name} className="player-image" />
      <div className="buttons">
        {!editModalOpen && !deleteConfirmationOpen && (
          <>
            <button className="button edit-button" onClick={handleEdit}>Edit</button>
            <button className="button delete-button" onClick={handleDelete}>Delete</button>
          </>
        )}
      </div>
      {deleteConfirmationOpen && (
        <div className="delete-confirmation">
          <h3>Are you sure you want to delete {player.name}?</h3>
          <div className="confirmation-buttons">
            <button className="confirm-button confirm-delete-button" onClick={handleConfirmDelete}>Yes</button>
            <button className="confirm-button confirm-cancel-button" onClick={handleCancelDelete}>No</button>
          </div>
        </div>
      )}
      {editModalOpen && (
        <div className="edit-form">
          <EditPlayerModal
            setEditModalOpen={setEditModalOpen}
            player={player}
          />
        </div>
      )}
      <div className="player-detail-info">
        <h2 className="player-name">{player.name}</h2>
        <p className="player-info">Age: {player.age}</p>
        <p className="player-info">Position: {player.position}</p>
        <p className="player-info">Country: {player.country}</p>
        <p className="player-info">Club: {player.club}</p>
        <p className="player-bio">{player.bio}</p>
        <p className="player-bio-author">Author of the Bio: {player.bioAuthor}</p>
      </div>
    </div>
  );
};

export default PlayerDetail;
