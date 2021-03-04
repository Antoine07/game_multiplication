import { SET_CHOICE } from "../constants/actions";

// SOURCE DE VERITE
const stateInit = {
  choices: [],
  count: 0,
};

const reducer = (state = stateInit, action = {}) => {
  // définir des variables utilisables dans le switch case

  switch (action.type) {
    case SET_CHOICE:
      const { multiplication, choice, success, count } = action.payload;

      const [num1, num2] = multiplication;

      const feeback = {
        multiplication: `${num1} X ${num2} = ${num1 * num2}`,
        choice: parseFloat(choice),
        status: success ? "success" : "echec",
        count: count,
      };

      const choices = state.choices.map((f) => ({ ...f }));

      choices.push(feeback);

      return {
        ...state,
        choices,
      };

    default:
      return state;
  }
};

export default reducer;
