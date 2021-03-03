import Form from "../components/Form";
import Info from "../components/Info";
import Container from "../Styles/Container";

import Grid from "../Styles/Grid";

const Game = () => {
  return (
    <Container>
      <Grid>
        <Form />
      </Grid>
      <Grid>
        <Info />
      </Grid>
    </Container>
  );
};

export default Game;
