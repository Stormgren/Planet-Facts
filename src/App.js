import React, { useState } from "react";
import PlanetInfo from "./PlanetInfo";
import "./App.css";
import HamburgerIcon from "./assets/icon-hamburger.svg";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  const hamburgerHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Router>
      <div>
        <nav>
          <div className="logo-hamburger">
            <h3 className="logo">THE PLANETS</h3>
            <button onClick={hamburgerHandler} className="hamburger">
              <img src={HamburgerIcon} />
            </button>
          </div>
          <div className={`${showMenu}`}>
            <ul>
              <li>
                <Link to="/" className="nav-link" onClick={hamburgerHandler}>
                  EARTH
                </Link>
              </li>
              <li>
                <Link
                  to="/mercury"
                  className="nav-link"
                  onClick={hamburgerHandler}
                >
                  MERCURY
                </Link>
              </li>
              <li>
                <Link
                  to="/venus"
                  className="nav-link"
                  onClick={hamburgerHandler}
                >
                  VENUS
                </Link>
              </li>
              <li>
                <Link
                  to="/mars"
                  className="nav-link"
                  onClick={hamburgerHandler}
                >
                  MARS
                </Link>
              </li>
              <li>
                <Link
                  to="/jupiter"
                  className="nav-link"
                  onClick={hamburgerHandler}
                >
                  JUPITER
                </Link>
              </li>
              <li>
                <Link
                  to="/saturn"
                  className="nav-link"
                  onClick={hamburgerHandler}
                >
                  SATURN
                </Link>
              </li>
              <li>
                <Link
                  to="/uranus"
                  className="nav-link"
                  onClick={hamburgerHandler}
                >
                  URANUS
                </Link>
              </li>
              <li>
                <Link
                  to="/neptune"
                  className="nav-link"
                  onClick={hamburgerHandler}
                >
                  NEPTUNE
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/mars">
            <PlanetInfo pageName={"Mars"} />
          </Route>
          <Route path="/mercury">
            <PlanetInfo pageName={"Mercury"} />
          </Route>
          <Route path="/venus">
            <PlanetInfo pageName={"Venus"} />
          </Route>
          <Route path="/jupiter">
            <PlanetInfo pageName={"Jupiter"} />
          </Route>
          <Route path="/saturn">
            <PlanetInfo pageName={"Saturn"} />
          </Route>
          <Route path="/uranus">
            <PlanetInfo pageName={"Uranus"} />
          </Route>
          <Route path="/Neptune">
            <PlanetInfo pageName={"Neptune"} />
          </Route>
          <Route path="/" exact>
            <PlanetInfo pageName={"Earth"} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
