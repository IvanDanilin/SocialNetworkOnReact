import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import './App.scss';
import Preloader from './components/common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import './null.scss';
import { initializeApp } from './redux/reducers/appReducer';
import { getMyUserProfile } from './redux/reducers/profileReducer';

const App = (props) => {
	useEffect(() => {
		props.initializeApp();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return props.initialized ? (
		<div className="app-wrapper">
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

export default compose(
	connect(mapStateToProps, { initializeApp, getMyUserProfile })
)(App);
