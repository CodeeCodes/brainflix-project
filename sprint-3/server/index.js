const axios = require("axios");
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();

app.get("/api/videos", (req, res) => {
  res.json(videos);
});

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

app.use(
  express.static(
    "/Users/codeepalmer/Desktop/brainflix-codee-palmer/sprint-3/client/public/index.html"
  )
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`port is running on ${PORT}`, __filename));

// const url = `https://project-2-api.herokuapp.com/videos?api_key=api_key=f7d8957a-1a18-4efc-b63a-22a6b2c06be0${process.argv[2]}`;
// console.log(process.argv);

// axios.get(url).then(response => {
//   fs.writeFile(
//     `${process.argv[2]}-videos.json`,
//     JSON.stringify(response.data),
//     err => {
//       if (err) console.log(err);
//       console.log("file has been saved");
//     }
//   );
// });
