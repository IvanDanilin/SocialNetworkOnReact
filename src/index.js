import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import state, { subscribe, sendMessage, getCurrentId, addPost, onMessageChange} from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";



const rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          sendMessage={sendMessage}
          getCurrentId={getCurrentId}
          addPost={addPost}
          onMessageChange={onMessageChange}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};


rerenderEntireTree()


subscribe(rerenderEntireTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

