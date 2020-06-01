import React from "react";
import "./null.scss"
import "./App.scss";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Profile from "./components/profile/Profile";



const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <Profile />
    </div>
  );
};

export default App;
