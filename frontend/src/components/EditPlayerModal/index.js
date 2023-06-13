import React, { useState, useEffect, useContext } from "react";
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


  return (
    <section>
      <form>
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
        <select value={position} onChange={updatePosition} >
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
      </form>
      <div className="edit-buttons">
        <button className="submit-button" type="submit">Update</button>
        <button className="cancel-button" onClick={() => setEditModalOpen(false)}>Cancel</button>
      </div>
    </section>
  )
}

export default EditPlayerModal;