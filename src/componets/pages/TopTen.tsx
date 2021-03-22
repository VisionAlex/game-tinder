import { useEffect, useState } from "react";
import data from "../../db.json";
import { GameCard } from "../GameCard";

interface TopTenProps {}

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

export const TopTen: React.FC<TopTenProps> = () => {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    // const gamesData = data.games.sort((a, b) => (a.score > b.score ? 1 : -1));
    setGames(data.games.slice(0, 10));
  }, []);
  return (
    <div className="topContainer">
      {games &&
        games.map((game, idx) => (
          <GameCard key={game.id} game={game} idx={idx} />
        ))}
    </div>
  );
};
