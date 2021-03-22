import { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import data from "../db.json";

interface GameCardProps {}

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

export const SwipeGameCards: React.FC<GameCardProps> = () => {
  const [games, setGames] = useState<Game[]>([]);
  const size = "720p";
  useEffect(() => {
    setGames(data.games);
  }, []);
  const onSwipe = (direction: string) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier: any) => {
    console.log(myIdentifier + " left the screen");
  };
  return (
    <div className="cardContainer">
      {games &&
        games.map((game) => (
          <div className="swipe">
            <TinderCard key={game.id} preventSwipe={["up"]}>
              <div
                style={{
                  backgroundImage: `url(https://images.igdb.com/igdb/image/upload/t_${size}/${game.cover.image_id}.jpg)`,
                }}
                className="card"
              >
                {/* <h3>{game.name}</h3> */}
              </div>
            </TinderCard>
          </div>
        ))}
    </div>
  );
};
