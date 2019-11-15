const express = require("express");
const router = express.Router();
const fileName =
  "/Users/codeepalmer/Desktop/brainflix-codee-palmer/sprint-3/server/model/sideVideos.json";
let sideVideos = require(fileName);
const fileNameTwo =
  "/Users/codeepalmer/Desktop/brainflix-codee-palmer/sprint-3/server/model/mainVideos.json";
let mainVideos = require(fileNameTwo);
const logger = require("../middleware/logger");
const app = express();
const helper = require("../middleware/helper");

app.use(logger);
//  Get all videos
router.get("/", (req, res) => {
  res.json(sideVideos);
});

//  Get student with :id
router.get("/:id", (req, res) => {
  // res.send(req.params.id);

  const found = mainVideos.some(video => video.id === req.params.id);

  if (found) {
    res.json(mainVideos.filter(video => video.id === req.params.id));
  } else {
    res
      .status(404)
      .json({ errorMessage: `Video with ID:${req.params.id} not found` });
  }
});
module.exports = router;
