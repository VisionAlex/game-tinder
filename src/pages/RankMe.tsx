import { useEffect } from "react";
import { SwipeGameCards } from "../componets/SwipeGameCards";

export const RankMe: React.FC = () => {
  useEffect(() => {
    const body = document.querySelector("body");
    if (body) body.style.overflow = "hidden";
    return () => {
      if (body) body.style.overflowY = "scroll";
    };
  });
  return <SwipeGameCards />;
};
