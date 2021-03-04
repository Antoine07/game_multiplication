import { CHECK_MULTIPLICATION } from "../constants/actions";
import { set_feeback } from "../actions/actions-types";

const middlewareLog = (store) => (next) => (action) => {
  
  const { feedback } = store.getState().feedback;

  const Feedback = { ...feedback };

  if (action.type === CHECK_MULTIPLICATION) {

   
    const { choice, multiplication, count, score: scoreBefore } = store.getState().calculate;

    Feedback.choice = choice;
    Feedback.multiplication = multiplication;
    Feedback.count = count;
    Feedback.scoreBefore = scoreBefore;

    //console.log( 'before', store.getState().calculate);
  }

  const returnAction = next(action);

  if (action.type === CHECK_MULTIPLICATION) {
    const { message, status, score:scoreAfter } = store.getState().calculate;

    Feedback.message = message;
    Feedback.status = status;
    Feedback.scoreAfter = scoreAfter;

    // console.log( 'after', store.getState().calculate);

    store.dispatch(set_feeback(Feedback));
  }

  return returnAction;
};

export default middlewareLog;
