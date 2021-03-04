import { CHECK_MULTIPLICATION  } from '../constants/actions';
import {set_feeback  } from '../actions/actions-types';

const middlewareLog = store => next => action => {

  const returnAction = next(action);

  if (action.type === CHECK_MULTIPLICATION ) {
    const { choice, multiplication, success, count } = store.getState().calculate;

    store.dispatch(set_feeback({ choice, multiplication, success, count }));
  }

  return returnAction; 
}

export default middlewareLog;