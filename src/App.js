import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { load } from "./store/actions/actions-types";

import Container from "./Styles/Container";
import GlobalStyle from "./Styles/Global";

import Home from "./components/Home";
import Game from "./components/Game";
import Score from "./components/Score";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./Styles/Nav";
import Feedback from "./components/Feedback";
import FeedbacksFire from "./components/FeedbacksFire";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(load()); // load au départ des multiplication
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
          <li>
            <Link to="/score">Score</Link>
          </li>
          <li>
            <Link to="/feedback">Feeback</Link>
          </li>
          <li>
            <Link to="/scores">Scores</Link>
          </li>
        </ul>
      </Nav>
      <Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/score">
            <Score />
          </Route>
          <Route path="/feedback">
            <Feedback />
          </Route>
          <Route path="/scores">
            <FeedbacksFire />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
