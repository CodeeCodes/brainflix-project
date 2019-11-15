const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const fileName =
  "/Users/codeepalmer/Desktop/brainflix-codee-palmer/sprint-3/server/model/sideVideos.json";
let sideVideos = require(fileName);
const fileNameTwo =
  "/Users/codeepalmer/Desktop/brainflix-codee-palmer/sprint-3/server/model/mainVideos.json";
let mainVideos = require(fileNameTwo);
const logger = require("../middleware/logger");
const app = express();
const helper = require("../middleware/helper");
const uuid = require("uuid");

app.use(logger);

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
//  Get all videos
router.get("/", (req, res) => {
  res.json(sideVideos);
});

//  Get student with :id
router.get("/:id", (req, res) => {
  const found = mainVideos.some(video => video.id === req.params.id);

  if (found) {
    res.json(mainVideos.filter(video => video.id === req.params.id));
  } else {
    res
      .status(404)
      .json({ errorMessage: `Video with ID:${req.params.id} not found` });
  }
});

router.post("/", (req, res) => {
  const newVideo = {
    id: uuid.v4(),
    title: req.body.title,
    channel: req.body.channel,
    image: req.body.image
  };

  if (!newVideo.channel) {
    res
      .status(400)
      .json({ ErrorMessage: "You need to fill in all the felids" });
  }
  sideVideos.push(newVideo);
  helper.writeJSONFile(fileName, sideVideos);
  res.json(sideVideos);
  res.redirect("/");
});
module.exports = router;
