import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { AboutMe } from "../components/AboutMe";
import nav from "./Navbar.module.css";
import logo from "../assets/dogehub_logo.svg";
import { HomePage } from "../pages/HomePage";
import { DogeApps } from "../pages/DogeApps";
import { DogeMemes } from "../pages/DogeMemes";

function Navbar() {
  return (
    <Router>
      <nav>
        <ul className={nav.listContainer}>
          <li className={nav.navbarList}>
            <NavLink
              exact
              activeClassName={nav.activePage}
              className={nav.link}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={nav.navbarList}>
            <NavLink
              activeClassName={nav.activePage}
              className={nav.link}
              to="/apps"
            >
              Doge Apps
            </NavLink>
          </li>
          <li className={nav.navbarList}>
            <NavLink
              activeClassName={nav.activePage}
              className={nav.link}
              to="/memes"
            >
              Doge Memes
            </NavLink>
          </li>
        </ul>
        <div className={nav.brandContainer}>
          <img className={nav.dogehubLogo} src={logo} alt="doge_logo_img" />
          <h3 className={nav.dogehubLogoText}>Dogehub</h3>
        </div>
      </nav>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/apps" exact component={DogeApps} />
        <Route path="/memes" exact component={DogeMemes} />
        <Route path="/about" exact component={AboutMe} />
      </Switch>
    </Router>
  );
}
export default Navbar;
