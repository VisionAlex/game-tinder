import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import TinderCard from "react-tinder-card";
import { Spinner } from "./Spinner";
import shuffle from "../utils/shuffle";
import { GamesContext } from "../GamesContext";
import { FlashMessage } from "./FlashMessage";
import { CSSTransition } from "react-transition-group";

export const SwipeGameCards: React.FC = () => {
  const baseUrl = "http://134.122.83.96/";
  const size = "720p";
  const { games, setGames } = useContext(GamesContext);
  const [error, setError] = useState<Error | null>(null);
  const [position, setPosition] = useState("up");
  const [showMessage, setShowMessage] = useState(false);

  const msgRef = useRef<HTMLDivElement>(null);
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
      }
    }
    init();
  }, [baseUrl, setGames]);

  useLayoutEffect(() => {
    setTimeout(() => {
      if (msgRef.current !== null) {
        msgRef.current.style.display = "flex";
      }
    }, 600);
  }, []);

  const swiped = (direction: string, game: Game) => {
    let score = 0;
    if (direction === "left") {
      score = game.score - 1;
      setPosition("down");
    }
    if (direction === "down") {
      score = game.score;
      setPosition("discard");
    }
    if (direction === "right") {
      score = game.score + 1;
      setPosition("up");
    }
    setShowMessage(true);
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
  if (error) throw error;
  return (
    <>
      <Spinner />
      <div ref={msgRef} className="cardContainer" style={{ display: "none" }}>
        {games.length &&
          games.map((game: Game) => (
            <div className="swipe" key={game.id}>
              <TinderCard
                preventSwipe={["up"]}
                onSwipe={(dir) => swiped(dir, game)}
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
        <CSSTransition
          in={showMessage}
          timeout={600}
          classNames="msg"
          unmountOnExit
          onEnter={() => setShowMessage(false)}
        >
          <FlashMessage position={position} />
        </CSSTransition>
      </div>
    </>
  );
};
