import React from 'react';
import './null.scss';
import './App.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

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
