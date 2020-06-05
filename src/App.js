import React from "react";
import "./null.scss";
import "./App.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <Sidebar />
          <Main />
        </div>
      </BrowserRouter>
  );
};

export default App;
