import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
} from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import { ThumbDown, ThumbUpOutlined } from "@material-ui/icons";

interface GameCardProps {
  game: Game;
  idx: number;
}

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    margin: "auto",
    marginBottom: theme.spacing(1),
    color: "aliceblue",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 345,
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: 545,
    },
    backgroundColor: "rgba(255,0,0,0)",
  },
  header: {
    marginLeft: 0,
    paddingLeft: 0,
  },
  title: {
    fontSize: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    borderRadius: "10px",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: blue[500],
  },
  content: {
    zIndex: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  summary: {
    display: "block",
  },
  description: {
    cursor: "pointer",
  },
  score: {
    display: "flex",
    alignItems: "center",
  },
}));

export const GameCard: React.FC<GameCardProps> = ({ game, idx }) => {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();
  const size = "screenshot_med";

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        avatar={
          <Avatar aria-label="game" className={classes.avatar}>
            {idx + 1}
          </Avatar>
        }
        title={
          <Typography variant="h6" className={classes.title}>
            {game.name}
          </Typography>
        }
      />
      <CardMedia
        className={classes.media}
        image={`https://images.igdb.com/igdb/image/upload/t_${size}/${game.cover.image_id}.jpg`}
        title={`Score:${game.score}`}
      />
      <CardContent className={classes.content}>
        <Typography
          onClick={handleExpandClick}
          variant="body1"
          className={classes.description}
        >
          Description
          <IconButton
            color="inherit"
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </Typography>
        {game.score >= 0 ? (
          <div className={classes.score}>
            <Typography
              variant="body2"
              style={{
                fontWeight: 500,
                paddingRight: 3,
                marginTop: 0,
              }}
            >
              {game.score}
            </Typography>
            <ThumbUpOutlined style={{ height: "0.9em", marginBottom: 6 }} />
          </div>
        ) : (
          <ThumbDown />
        )}
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Typography className={classes.summary} variant="body2">
          {game.summary}
        </Typography>
      </Collapse>
    </Card>
  );
};
