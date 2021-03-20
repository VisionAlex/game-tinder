import { Container, Paper } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Header } from "./componets/Header";
import "./App.css";
import data from "./db.json";
import { Spinner } from "./componets/Spinner";

interface Game {
  id: number;
  cover: {
    id: number;
    image_id: string;
  };
  name: string;
  slug: string;
  summary: string;
}

// const fetchData = () => {
//   return fetch("http://localhost:3001/games")
//     .then((response) => response.json())
//     .then((response) => response)
//     .catch((err) => console.log(err));
// };

function App() {
  const size = "720p";
  const [games, setGames] = useState<Game[]>([]);
  // useEffect(() => {
  // fetchData().then((data) => {
  //   console.log(data);
  // setGames(data.games);
  // });
  // }, []);
  return (
    <>
      <Header />
      <div className="container">
        {games && games.length > 0 ? (
          <Paper
            className="card"
            style={{
              backgroundImage: `url(https://images.igdb.com/igdb/image/upload/t_${size}/${games[0].cover.image_id}.jpg)`,
            }}
          ></Paper>
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
}

export default App;
