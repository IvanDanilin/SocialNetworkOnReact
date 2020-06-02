import React from "react";
import "./null.scss";
import "./App.scss";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

const App = () => {
  return (
      <div className="app-wrapper">
        <Header />
        <Main />
      </div>
  );
};

export default App;
