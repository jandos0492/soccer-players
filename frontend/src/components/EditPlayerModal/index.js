import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { PlayerContext } from "../../context/PlayerContext";
import "./EditPlayerModal.css";

const EditPlayerModal = ({ editModalOpen, setEditModalOpen, player }) => {
  const positions = ["Goalkeeper", "Defender", "Midfielder", "Forward"];
  const { updatePlayer } = useContext(PlayerContext);
  const [no, setNo] = useState(player.no);
  const [name, setName] = useState(player.name);
  const [age, setAge] = useState(player.age);
  const [position, setPosition] = useState(player.position);
  const [country, setCountry] = useState(player.country);
  const [club, setClub] = useState(player.club);
  const [bio, setBio] = useState(player.bio);
  const [bioAuthor, setBioAuthor] = useState(player.bioAuthor);
  const [smallImageUrl, setSmallImageUrl] = useState(player.smallImageUrl);
  const [largeImageUrl, setLargeImageUrl] = useState(player.largeImageUrl);

  const updateNo = (e) => setNo(e.target.value);
  const updateName = (e) => setName(e.target.value);
  const updateAge = (e) => setAge(e.target.value);
  const updatePosition = (e) => setPosition(e.target.value);
  const updateCountry = (e) => setCountry(e.target.value);
  const updateClub = (e) => setClub(e.target.value);
  const updateBio = (e) => setBio(e.target.value);
  const updateBioAuthor = (e) => setBioAuthor(e.target.value);
  const updateSmallImageUrl = (e) => setSmallImageUrl(e.target.value);
  const updateLargeImageUrl = (e) => setLargeImageUrl(e.target.value);

  // Handle update the player
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPlayer = {
      no,
      name,
      age,
      position,
      country,
      club,
      bio,
      bioAuthor,
      smallImageUrl,
      largeImageUrl,
    };
    console.log("Updating player:", updatedPlayer);
    updatePlayer(id, updatedPlayer)
      .then((success) => {
        if (success) {
          console.log("Player updated successfully");
        } else {
          console.log("Failed to update player");
        }
      })
      .catch((error) => {
        console.error("Error updating player:", error);
      });
    setEditModalOpen(false);
  };



  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          min="1"
          required
          placeholder="Number"
          value={no}
          onChange={updateNo}
        />
        <input
          type="text"
          required
          placeholder="Name"
          value={name}
          onChange={updateName}
        />
        <input
          type="number"
          min="10"
          required
          placeholder="Age"
          value={age}
          onChange={updateAge}
        />
        <select value={position} onChange={updatePosition} menuposition="fixed" >
          {positions.map((position) =>
            <option key={position}>{position}</option>
          )}
        </select>
        <input
          type="text"
          required
          placeholder="Country"
          value={country}
          onChange={updateCountry}
        />
        <input
          type="text"
          required
          placeholder="Club"
          value={club}
          onChange={updateClub}
        />
        <textarea
          cols="30" rows="10"
          placeholder="Player Bio"
          value={bio}
          onChange={updateBio}
        >
        </textarea>
        <input
          type="text"
          required
          placeholder="Bio Author"
          value={bioAuthor}
          onChange={updateBioAuthor}
        />
        <input
          type="text"
          required
          placeholder="Small Image Address"
          value={smallImageUrl}
          onChange={updateSmallImageUrl}
        />
        <input
          type="text"
          required
          placeholder="Large Image Address"
          value={largeImageUrl}
          onChange={updateLargeImageUrl}
        />
        <div className="edit-buttons">
          <button type="submit" className="submit-button" >Update</button>
          <button className="cancel-button" onClick={() => setEditModalOpen(false)}>Cancel</button>
        </div>
      </form>
    </section>
  )
}

export default EditPlayerModal;