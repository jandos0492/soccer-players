const router = require("express").Router();

router.get("/alive", (req, res) => {
    res.status(200).json({ message: "Server is alive" });
});

module.exports = router;