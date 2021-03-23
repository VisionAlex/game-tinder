import { Header } from "./componets/Header";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RankMe } from "./pages/RankMe";
import { TopTen } from "./pages/TopTen";
import { GamesContext } from "./GamesContext";
import { useMemo, useState } from "react";

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const gamesProvider = useMemo(() => ({ games, setGames }), [games, setGames]);
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <GamesContext.Provider value={gamesProvider}>
            <Route path="/" exact component={RankMe} />
            <Route path="/rank-me" component={RankMe} />
            <Route path="/top-ten" component={TopTen} />
          </GamesContext.Provider>
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
