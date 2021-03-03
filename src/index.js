import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import firebase from "firebase";

// Configuration de store global de l'application
import configureStore from "./store/createStore";

import { FirebaseDatabaseProvider } from "@react-firebase/database";

const store = configureStore();

// firebase
export const firebaseConfig = {
  apiKey: "AIzaSyDFKTjp4zaeBPvi3h_9GL63dyixBHYUACU",
  authDomain: "app-music-71bd0.firebaseapp.com",
  databaseURL: "https://app-music-71bd0.firebaseio.com",
  projectId: "app-music-71bd0",
  storageBucket: "app-music-71bd0.appspot.com",
  messagingSenderId: "123652786365",
  appId: "1:123652786365:web:80c2db7ee4342d6a14cfd4",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
      <Provider store={store}>
        <App />
      </Provider>
    </FirebaseDatabaseProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
