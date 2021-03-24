import { Typography } from "@material-ui/core";
import { ThumbDown, ThumbUp } from "@material-ui/icons";

interface FlashMessageProps {
  position: string;
}

export const FlashMessage: React.FC<FlashMessageProps> = ({ position }) => {
  return (
    <div className="message-card">
      <div className="message">
        <div className="message_text"></div>
        {position === "up" && <ThumbUp fontSize="inherit" htmlColor="green" />}
        {position === "down" && <ThumbDown fontSize="inherit" color="error" />}
        {position === "discard" && (
          <Typography variant="h4" style={{ fontWeight: 800 }}>
            DISCARD
          </Typography>
        )}
      </div>
    </div>
  );
};
