const igdb = require("igdb-api-node").default;
const fs = require("fs");

// const CLIENT_ID = "fgj1fge011in1imr8efqkix0w6alxh";
// const CLIENT_SECRET = "9osu1h32o6fl8tyisg4gzk85vbtyc5";
// const BASE_URL = "https://api.igdb.com/v4";

// const getAccesToken = () => {
//   axios({
//     url: `https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`,
//     method: "POST",
//   })
//     .then((res) => res.data)
//     .then((res) => {
//       console.log(res);
//       return res.access_token;
//     });
// };

const getGames = async () => {
  try {
    const response = await igdb(
      "fgj1fge011in1imr8efqkix0w6alxh",
      "ck9srrkrfafdfhf0xiotuh6hc9amhx"
    )
      .fields("id, name, rating,rating_count, slug, summary, cover.image_id")
      .limit(100)
      .where("rating > 80 & rating_count > 1000")
      .request("/games");
    const data = {
      games: response.data.map((game) => ({ ...game, score: 0 })),
    };
    fs.writeFileSync("tools/db.json", JSON.stringify(data));
    //   console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

getGames();
