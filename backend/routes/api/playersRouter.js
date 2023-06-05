const router = require("express").Router();
const  { Player }  = require("../../db/models");

router.get("/players", async (req, res) => {
  try {
    const players = await Player.findAll();
    res.json(players);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

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



module.exports = router;