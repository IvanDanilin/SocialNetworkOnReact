import React, { useEffect } from 'react';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import './App.scss';
import Preloader from './components/common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import './null.scss';
import { initializeApp } from './redux/reducers/appReducer';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';

export const AppPure = ({initializeApp, initialized}) => {

	useEffect(() => {
		initializeApp();
	}, [initializeApp]);

	return initialized ? (
		<div className='app-wrapper'>
			<HeaderContainer />
			<Sidebar />
			<Main />
		</div>
	) : (
		<Preloader />
	);
};

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
});

export const AppWithComose = compose(
	connect(mapStateToProps, { initializeApp })
)(AppPure);

const App = () => (
	<BrowserRouter>
		<Provider store={store}>
			<AppWithComose />
		</Provider>
	</BrowserRouter>
);

export default App;
