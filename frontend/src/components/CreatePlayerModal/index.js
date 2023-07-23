import React, { useState, useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";
import { useNavigate } from "react-router-dom";
import "./CreatePlayerModal.css";

const CreatePlayerModal = ({ setCreateModalOpen }) => {
  const positions = ["Goalkeeper", "Defender", "Midfielder", "Forward"];
  const { createPlayer, players } = useContext(PlayerContext);
  // const [no, setNo] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");
  const [country, setCountry] = useState("");
  const [club, setClub] = useState("");
  const [bio, setBio] = useState("");
  const [bioAuthor, setBioAuthor] = useState("");
  const [smallImageUrl, setSmallImageUrl] = useState("");
  const [largeImageUrl, setLargeImageUrl] = useState("");

  // Setting the no of the new created player automatically
  const noArray = [];
  players.map((player) => noArray.push(player.no));
  const no = Math.max(...noArray) + 1 || 1;

  const updateName = (e) => setName(e.target.value);
  const updateAge = (e) => setAge(e.target.value);
  const updatePosition = (e) => setPosition(e.target.value);
  const updateCountry = (e) => setCountry(e.target.value);
  const updateClub = (e) => setClub(e.target.value);
  const updateBio = (e) => setBio(e.target.value);
  const updateBioAuthor = (e) => setBioAuthor(e.target.value);
  const updateSmallImageUrl = (e) => setSmallImageUrl(e.target.value);
  const updateLargeImageUrl = (e) => setLargeImageUrl(e.target.value);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdPlayerData = {
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

    const createdPlayer = await createPlayer(createdPlayerData);
    const { id } = createdPlayer;
    setCreateModalOpen(false);
    navigate(`/${id}`);
  };



  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          min="1"
          required
          placeholder="Player Number"
          defaultValue={no}
        />
        <input
          type="text"
          required
          placeholder="Player Name"
          value={name}
          onChange={updateName}
        />
        <input
          type="number"
          min="10"
          required
          placeholder="Player Age"
          value={age}
          onChange={updateAge}
        />
        <select value={position} onChange={updatePosition} menuposition="fixed">
          <option disabled>Player Position</option>
          {positions.map((position) => (
            <option key={position}>{position}</option>
          ))}
        </select>
        <input
          type="text"
          required
          placeholder="Player Country"
          value={country}
          onChange={updateCountry}
        />
        <input
          type="text"
          required
          placeholder="Player Club"
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
          placeholder="Player Small Image Address"
          value={smallImageUrl}
          onChange={updateSmallImageUrl}
        />
        <input
          type="text"
          required
          placeholder="Player Large Image Address"
          value={largeImageUrl}
          onChange={updateLargeImageUrl}
        />
        <div className="edit-buttons">
          <button type="submit" className="submit-button" >Create</button>
          <button className="cancel-button" onClick={() => setCreateModalOpen(false)}>Cancel</button>
        </div>
      </form>
    </section>
  )
}

export default CreatePlayerModal;