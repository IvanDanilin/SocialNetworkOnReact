import React from "react";
import "./null.scss";
import "./App.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

const App = (props) => {
  return (
        <div className="app-wrapper">
          <Header />
          <Sidebar />
          <Main state={props.state} sendMessage={props.sendMessage} getCurrentId={props.getCurrentId} addPost={props.addPost} />
        </div>
  );
};

export default App;
