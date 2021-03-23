/// <reference types="react-scripts" />
interface Game {
  id: number;
  cover: {
    id: number;
    image_id: string;
  };
  name: string;
  slug: string;
  summary: string;
  score: number;
}
