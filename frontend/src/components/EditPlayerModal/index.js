// // EditPlayerModal.js
// import React, { useState } from "react";

// const EditPlayerModal = ({ player, closeModal }) => {
//   const [editedPlayer, setEditedPlayer] = useState(player);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Logic to update the player information
//     // You can make a fetch request to update the player data on the server

//     // After the update is complete, close the modal
//     closeModal();
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <h2>Edit Player</h2>
//         <form onSubmit={handleSubmit}>
//           {/* Implement the necessary form fields to edit the player information */}
//           <label htmlFor="name">Name</label>
//           <input type="text" id="name" value={editedPlayer.name} onChange={(e) => setEditedPlayer({ ...editedPlayer, name: e.target.value })} />

//           <label htmlFor="age">Age</label>
//           <input type="number" id="age" value={editedPlayer.age} onChange={(e) => setEditedPlayer({ ...editedPlayer, age: e.target.value })} />

//           {/* Add more form fields for other player information */}

//           <button type="submit">Save</button>
//           <button type="button" onClick={closeModal}>Cancel</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditPlayerModal;
