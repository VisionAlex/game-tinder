import { useEffect, useState } from "react";
import { GameCard } from "../componets/GameCard";
import { Spinner } from "../componets/Spinner";

interface TopTenProps {}

export const TopTen: React.FC<TopTenProps> = () => {
  const baseUrl = "http://134.122.83.96/";
  const [topGames, setTopGames] = useState<Game[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const res = await fetch(baseUrl + "games");
        if (res.ok) {
          const json = await res.json();
          const sorted = json
            .sort((a: Game, b: Game) => a.score < b.score)
            .slice(0, 10);
          setTopGames(sorted);
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [baseUrl]);
  if (error) throw error;
  if (loading) return <Spinner />;
  return (
    <div className="topContainer">
      {topGames.map((game, idx) => (
        <GameCard key={game.id} game={game} idx={idx} />
      ))}
    </div>
  );
};
