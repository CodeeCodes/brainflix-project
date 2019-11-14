const axios = require("axios");
const fs = require("fs");
const router = express.Router();

const url = `https://project-2-api.herokuapp.com/videos?api_key=api_key=f7d8957a-1a18-4efc-b63a-22a6b2c06be0${process.argv[2]}`;
console.log(process.argv);

const videos = axios.get(url).then(response => {
  router.get(
    `${process.argv[2]}api/videos.json`,
    JSON.stringify(response.data),
    err => {
      if (err) console.log(err);
      console.log("file has been saved");
    }
  );
});

module.exports = videos;
