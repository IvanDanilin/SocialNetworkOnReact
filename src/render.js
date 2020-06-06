import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { sendMessage, getCurrentId, addPost } from "./redux/state";


export const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          sendMessage={sendMessage}
          getCurrentId={getCurrentId}
          addPost={addPost}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
