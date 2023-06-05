const router = require("express").Router();
const  { Player }  = require("../../db/models");

// Get all the players
router.get("/players", async (req, res) => {
  try {
    const players = await Player.findAll();
    res.json(players);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// Get one player by id
router.get("/players/:id", async (req, res) => {
  const playerId = req.params.id;
  try {
    const player = await Player.findByPk(playerId);

    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }

    res.json(player);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error"});
  }
})

// create a new player
router.post("/players", async (req, res) => {
  const {
    no,
    name,
    age,
    country,
    position,
    club,
    bio,
    bioAuthor,
    smallImageUrl,
    largeImageUrl,
  } = req.body;

  try {
    const newPlayer = await Player.create({
      no,
      name,
      age,
      country,
      position,
      club,
      bio,
      bioAuthor,
      smallImageUrl,
      largeImageUrl
    });

    res.status(201).json(newPlayer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// Delete the player
router.delete("/players/:id", async (req, res) => {
  
})



module.exports = router;