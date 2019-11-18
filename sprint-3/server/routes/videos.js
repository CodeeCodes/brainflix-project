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
    channel: "Newest Member Of BrainFlix",
    image: req.body.image,
    description: req.body.channel,
    views: 5000000,
    likes: 5000000,
    duration: "4:20",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: new Date(),
    comments: [
      {
        name: "Micheal Lyons",
        comment:
          "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
        id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
        likes: 0,
        timestamp: 1545162149000
      },
      {
        name: "Gary Wong",
        comment:
          "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
        likes: 0,
        timestamp: 1544595784046
      },
      {
        name: "Theodore Duncan",
        comment:
          "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
        likes: 0,
        timestamp: 1542262984046
      }
    ]
  };

  const newVideoSide = {
    id: newVideo.id,
    title: req.body.title,
    channel:"Newest Member Of BrainFlix",
    description: req.body.channel,
    image: req.body.image
  };

  if (!newVideoSide.channel) {
    res
      .status(400)
      .json({ ErrorMessage: "You need to fill in all the felids" });
  }

  mainVideos.push(newVideo);
  sideVideos.push(newVideoSide);
  helper.writeJSONFile(fileName, sideVideos);
  helper.writeJSONFile(fileNameTwo, mainVideos);
  res.redirect("/");
});
module.exports = router;
