import { Button, IconButton, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

interface HeaderProps {}

const useStyles = makeStyles((theme) => ({
  nav: {
    height: "10vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "5px",
    marginRight: "5px",
    paddingTop: "15px",
  },
  logo: {
    height: "fit-content",
    width: "80px",
  },
}));

export const Header: React.FC<HeaderProps> = () => {
  const classes = useStyles();
  return (
    <header>
      <nav className={classes.nav}>
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
          color="primary"
        >
          Top 10
        </Button>
      </nav>
    </header>
  );
};
