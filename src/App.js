import React from "react";
import "./null.scss";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
