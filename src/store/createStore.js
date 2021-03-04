import { applyMiddleware, createStore } from 'redux';

// permet la gestion de l'async dans Redux
import thunkMiddleware from 'redux-thunk';

// middleware pour gérer l'historique lorsqu'on change la date de la devise

import feedbackMiddleware from './middlewares/feedbackMiddleware'; 

// les reducers (parties algo & gestion du store global)
import rootReducer from './reducers';

// preloadedState permet d'assigner des valeurs à votre store dans les reducers TODO
const  configureStore = (preloadedState = {}) => {

    // vos middlewares
    const middlewares = [ feedbackMiddleware ];

    const middlewareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(rootReducer, preloadedState, middlewareEnhancer);

    return store;
}

export default configureStore;