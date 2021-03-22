import { Button, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "./logo.svg";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header">
      <IconButton component={Link} to="/" color="inherit">
        <img src={logo} alt="logo" className="logo" />
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
    </header>
  );
};
