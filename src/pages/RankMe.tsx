import { useEffect } from "react";
import { SwipeGameCards } from "../componets/SwipeGameCards";

export const RankMe: React.FC = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  });
  return <SwipeGameCards />;
};
