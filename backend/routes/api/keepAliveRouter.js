const router = require("express").Router();

router.get("/keep-alive", (req, res) => {
    res.status(200).send("Server is alive");
});

module.exports = router;