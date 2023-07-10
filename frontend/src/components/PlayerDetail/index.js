import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PlayerDetail.css";
import EditPlayerModal from "../EditPlayerModal";
import CreatePlayerModal from "../CreatePlayerModal";
import DefaultRoute from "../DefaultRoute";
import { PlayerContext } from "../../context/PlayerContext";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCirclePlus, faCircleArrowRight, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faCirclePlus, faCircleArrowRight, faCircleArrowLeft);

const PlayerDetail = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { deletePlayer, players, player, setPlayer } = useContext(PlayerContext);


  // Handle the case when the player not found
  useEffect(() => {
    const playerData = players.find((p) => p.id === +id);
    if (playerData) {
      setEditModalOpen(false);
      setPlayer(playerData);
    } 
  }, [id, players, setPlayer]);

  const handleDelete = () => {
    if (!editModalOpen && !deleteConfirmationOpen && !createModalOpen) {
      setDeleteConfirmationOpen(true);
    }
  }

  const handleCreate = () => {
    if (!editModalOpen && !deleteConfirmationOpen) {
      setCreateModalOpen((prevState) => !prevState);
    }
  };

  // Closing create modal when id changes
  useEffect(() => {
    setCreateModalOpen(false); 
  }, [id]);



  const handleConfirmDelete = () => {
    const playerIndex = players.findIndex((play) => play.id === +id);

    if (playerIndex !== -1) {
      const nextPlayerIndex = playerIndex !== players.length - 1 ? playerIndex + 1 : 0;
      const nextPlayerId = players[nextPlayerIndex].id;

      deletePlayer(id)
        .then((success) => {
          if (success) {
            navigate(`/${nextPlayerId}`);
          } else {
            navigate("/404");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      navigate("/404");
    }

    setDeleteConfirmationOpen(false);
  };



  const handleCancelDelete = () => {
    setDeleteConfirmationOpen(false);
  }

  const image = () => {
    if (player && player.largeImageUrl && player.largeImageUrl.startsWith("http")) {
      return player.largeImageUrl;
    } else if (player && player.largeImageUrl) {
      return `/${player.largeImageUrl}`;
    } else {
      return "";
    }
  };

  const handleEdit = () => {
    if (!editModalOpen && !deleteConfirmationOpen && !createModalOpen) {
      setEditModalOpen(true);
    }
  }

  // Handling the next player button
  const handleNextPlayer = () => {
    const playerIndex = players.findIndex((player) => player.id === +id);
    let nextPlayerIndex;

    if (playerIndex === players.length - 1) {
      nextPlayerIndex = 0;
    } else {
      nextPlayerIndex = playerIndex + 1;
    }

    const nextPlayerId = players[nextPlayerIndex].id;
    navigate(`/${nextPlayerId}`);
  };


  // Handling the previous player button
  const handlePreviousPlayer = () => {
    const playerIndex = players.findIndex((player) => player.id === +id);
    let previousPlayerIndex;

    if (playerIndex === 0) {
      previousPlayerIndex = players.length - 1;
    } else {
      previousPlayerIndex = playerIndex - 1;
    }

    const previousPlayerId = players[previousPlayerIndex].id;
    navigate(`/${previousPlayerId}`);
  };


  if (!player) {
    return <DefaultRoute />
  }

  return (
    <div className={`player-detail${editModalOpen ? " edit-modal-open" : ""} 
          ${deleteConfirmationOpen ? " delete-confirmation-open" : ""}
          ${createModalOpen ? " create-modal-open" : ""}`}>
      <img src={image()} alt={player.name} className="player-image" />
      <div className="buttons">
        {!editModalOpen && !deleteConfirmationOpen && (
          <>
            <button className="previous-player-button" onClick={handlePreviousPlayer}>
              <FontAwesomeIcon className="previous-icon" icon={faCircleArrowLeft} />
            </button>
            <button className="button edit-button" onClick={handleEdit}>Edit</button>
            <button className="button delete-button" onClick={handleDelete}>Delete</button>
            <button className="next-player-button" onClick={handleNextPlayer}>
              <FontAwesomeIcon className="next-icon" icon={faCircleArrowRight} />
            </button>
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
      <button className="create-player-button" onClick={handleCreate}>
        <FontAwesomeIcon className="plus-icon" icon="fa-solid fa-circle-plus" />
      </button>
      <div className="create-form">
        {createModalOpen && (
          <CreatePlayerModal
            className="create-modal"
            setCreateModalOpen={setCreateModalOpen}
          />
        )}
      </div>
      <div className="edit-form">
        {editModalOpen && (
          <EditPlayerModal
            setEditModalOpen={setEditModalOpen}
            player={player}
          />
        )}
      </div>
      <div className="player-detail-info">
        <h2 className="player-name">{player.name}</h2>
        <p className="player-info"><strong>Age:</strong> {player.age}</p>
        <p className="player-info"><strong>Position:</strong> {player.position}</p>
        <p className="player-info"><strong>Country:</strong> {player.country}</p>
        <p className="player-info"><strong>Club:</strong> {player.club}</p>
        <p className="player-bio">{player.bio}</p>
        <p className="player-bio-author">Author of the Bio: {player.bioAuthor}</p>
      </div>
    </div>
  );
};

export default PlayerDetail;
