import { AppBar, Button, IconButton, Toolbar } from "@material-ui/core";
import logo from "./logo.svg";
interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header">
      <AppBar position="static" color="transparent">
        <Toolbar className="tools">
          <Button size="large" className="menuItem" color="inherit">
            RankMe
          </Button>
          <IconButton color="inherit">
            <img src={logo} alt="logo" className="logo" />
          </IconButton>
          <Button size="large" className="menuItem" color="inherit">
            Top 10
          </Button>
        </Toolbar>
      </AppBar>
    </header>
  );
};
