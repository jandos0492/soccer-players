const router = require("express").Router();
const api = require("./api/playersRouter");

router.use("/api", api);

module.exports = router;