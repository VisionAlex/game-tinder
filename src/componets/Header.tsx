import { Button, IconButton, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  nav: {
    width: "100%",
    height: "80px",
    display: "flex",
    boxSizing: "border-box",
    justifyContent: "space-between",
    alignItems: "center",
    margingTop: 0,
    background: "linear-gradient(to left, #0f2027, #203a43, #2c5364)",
    position: "fixed",
    zIndex: 999,
    top: 0,
    left: 0,
  },

  logo: {
    height: "fit-content",
    width: "60px",
    padding: 0,
    margin: 0,
  },
}));

export const Header: React.FC = () => {
  const classes = useStyles();
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(scrolled);
  });
  return (
    <header>
      <nav className={clsx(classes.nav)}>
        <IconButton component={Link} to="/" color="inherit">
          <img src={logo} alt="logo" className={classes.logo} />
        </IconButton>
        <Button
          variant="outlined"
          component={Link}
          to="/rank-me"
          size="large"
          className="menuItem"
          color="primary"
        >
          Rank Me
        </Button>
        <Button
          component={Link}
          to="/top-ten"
          style={{ color: "#FFFFFF" }}
          size="large"
          className="menuItem"
        >
          Top 10
        </Button>
      </nav>
    </header>
  );
};
