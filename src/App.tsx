import { Header } from "./componets/Header";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./componets/pages/Home";
import { RankMe } from "./componets/pages/RankMe";
import { TopTen } from "./componets/pages/TopTen";

// const fetchData = () => {
//   return fetch("http://localhost:3001/games")
//     .then((response) => response.json())
//     .then((response) => response)
//     .catch((err) => console.log(err));
// };

function App() {
  // const size = "720p";
  // const [games, setGames] = useState<Game[]>([]);
  // useEffect(() => {
  // fetchData().then((data) => {
  //   console.log(data);
  // setGames(data.games);
  // });
  // }, []);
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rank-me" component={RankMe} />
          <Route path="/top-ten" component={TopTen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

/* {games && games.length > 0 ? (
          <Paper
            className="card"
            style={{
              backgroundImage: `url(https://images.igdb.com/igdb/image/upload/t_${size}/${games[0].cover.image_id}.jpg)`,
            }}
          ></Paper>
        ) : (
          <Spinner />
        )} */
