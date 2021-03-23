import { useContext, useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import { Spinner } from "./Spinner";
import shuffle from "../utils/shuffle";
import { GamesContext } from "../GamesContext";

export const SwipeGameCards: React.FC = () => {
  const baseUrl = "http://134.122.83.96/";
  const size = "720p";
  const { games, setGames } = useContext(GamesContext);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const res = await fetch(baseUrl + "games");
        if (res.ok) {
          const json = await res.json();
          setGames(shuffle(json));
        }
      } catch (e) {
        setError(e);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    }
    init();
  }, [baseUrl, setGames]);

  const swiped = (direction: string, game: Game) => {
    let score = 0;
    if (direction === "left") {
      score = game.score - 1;
    }
    if (direction === "down") {
      score = game.score;
    }
    if (direction === "right") {
      score = game.score + 1;
    }
    const game_obj = { ...game, score };
    fetch(baseUrl + "games/" + game_obj.id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(game_obj),
    })
      .then((res) => {
        if (res.ok) {
          console.log("SUCCESS");
          return res.json();
        } else {
          console.log(res.text);
        }
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  // const onCardLeftScreen = (myIdentifier: any) => {
  //   console.log(myIdentifier + " left the screen");
  // };
  // if (loading) return <Spinner />;
  if (error) throw error;
  return (
    <>
      {loading && <Spinner />}
      <div className="cardContainer">
        {games.length &&
          games.map((game: Game) => (
            <div className="swipe" key={game.id}>
              <TinderCard
                preventSwipe={["up"]}
                onSwipe={(dir) => swiped(dir, game)}
                flickOnSwipe
              >
                <div
                  style={{
                    backgroundImage: `url(https://images.igdb.com/igdb/image/upload/t_${size}/${game.cover.image_id}.jpg)`,
                  }}
                  className="card"
                ></div>
              </TinderCard>
            </div>
          ))}
      </div>
    </>
  );
};
