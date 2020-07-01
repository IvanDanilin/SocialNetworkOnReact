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
import { getMyUserProfile } from './redux/reducers/profileReducer';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';

const AppPure = (props) => {
	useEffect(() => {
		props.initializeApp();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return props.initialized ? (
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
	initialized: state.app.initialized,
	isAuth: state.auth.isAuth,
	authUserId: state.auth.userId,
});

const AppWithComose = compose(
	connect(mapStateToProps, { initializeApp, getMyUserProfile })
)(AppPure);

const App = () => (
	<BrowserRouter>
		<Provider store={store}>
			<AppWithComose />
		</Provider>
	</BrowserRouter>
);

export default App;
