import { useSelector } from "react-redux";
import Button from "../Styles/Button";
import Presentation from "../Styles/Presentation";

const Feedback = () => {
  const { round } = useSelector((state) => state.feedback);

  return (
    <Presentation color="white">
      {round.map(({ part, average, date }, i) => (
        <ul key={i}>
          <li>
            Average : {average} date: {date}
          </li>
          {part.map((feedback, i) => (
            <li key={i}>
              Score : {feedback.scoreBefore}
              <br />
              Message : {feedback.message}
              <br />
            </li>
          ))}
        </ul>
      ))}
      <Button>TODO</Button>
    </Presentation>
  );
};

export default Feedback;
