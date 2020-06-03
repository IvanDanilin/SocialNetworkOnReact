import React from "react";
import "./null.scss";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
  return (
      <div className="app-wrapper">
        <Header />
        <Main />
      </div>
  );
};

export default App;
