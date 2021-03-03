import { useState } from "react";

import Container from "../Styles/Container";
import Presentation from "../Styles/Presentation";

import { useSelector, useDispatch } from "react-redux";
import { reload } from "../store/actions/actions-types";

import { Redirect, Link } from "react-router-dom";

import Button from "../Styles/Button";

const Score = () => {
  const { score, status } = useSelector((state) => state.calculate);
  const [refresh, setRefresh] = useState(false); // state local pour pouvoir aller/venir sur cette page pendant la partie

  const dispatch = useDispatch();

  const handleReload = (e) => {
    setRefresh(true);
    dispatch(reload());
  };

  if (refresh) return <Redirect to="/game" />;

  return (
    <Container>
      <Presentation color="white">
        Votre score : {score}
        {status === false && (
          <Button onClick={handleReload} size="200">
            Rejouer
          </Button>
        )}
        {status === true && (
          <Link
            style={{ color: "palevioletred", textDecoration: "none" }}
            to="/game"
          >
            <Button size="200">Revenir au jeu</Button>
          </Link>
        )}
      </Presentation>
    </Container>
  );
};

export default Score;
