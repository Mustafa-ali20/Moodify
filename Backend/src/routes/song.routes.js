const express = require("express");
const upload = require("../middlewares/upload.middleware");
const { uploadSong, getSong } = require("../controllers/songs.controller");

const router = express.Router();

/**
 * POST api/songs/
 */
router.post("/", upload.single("song"), uploadSong);
router.get("/", getSong);

module.exports = router;
