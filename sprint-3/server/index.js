const videos = require("./routes/apiVideos");
const path = require("path");
const express = require("express");
const app = express();

app.get("/api/videos", (req, res) => {
  res.json(videos);
});

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.use(
//   express.static(
//     "/Users/codeepalmer/Desktop/brainflix-codee-palmer/sprint-3/client/public/index.html"
//   )
// );

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`port is running on ${PORT}`, __filename));
