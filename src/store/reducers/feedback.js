import { SET_FEEBACK } from "../constants/actions";

// SOURCE DE VERITE
const stateInit = {
  round: [],
  choices: [],
  feedback: {
    choice: null,
    multiplication: null,
    count: 0,
    scoreBefore: 0,
    scoreAfter: 0,
    message: "",
    status: null,
  },
  count: 0,
};

const reducer = (state = stateInit, action = {}) => {
  // définir des variables utilisables dans le switch case

  switch (action.type) {
    case SET_FEEBACK:
      const feedback = action.payload;
      const choices = state.choices.map((f) => ({ ...f }));
      choices.push(feedback);

      if (feedback.status === false) {
        state.choices.push(feedback);
        const average = Math.floor((feedback.scoreAfter / (state.count + 1)) * 100) / 100;
        state.round.push({ part: state.choices, average, date : (new Date()).toLocaleTimeString() });

        return {
          ...state,
          choices: [],
          round: state.round,
          count : 0
        };
      }

      return {
        ...state,
        choices,
        count : state.count + 1
      };

    default:
      return state;
  }
};

export default reducer;
