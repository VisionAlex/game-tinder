import { Button, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export const Header: React.FC = () => {
  return (
    <header>
      <nav className="nav">
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
        >
          Top 10
        </Button>
      </nav>
    </header>
  );
};
