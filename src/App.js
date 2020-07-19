import React, { useEffect, useState } from 'react';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import './App.scss';
import Preloader from './components/common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import './null.scss';
import { initializeApp } from './redux/reducers/appReducer';
import { HashRouter } from 'react-router-dom';
import store from './redux/store';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/common/theme';

export const AppPure = ({ initializeApp, initialized }) => {
	const [mainMenuIsActive, setMainMenuIsActive] = useState(false);

	useEffect(() => {
		initializeApp();
	}, [initializeApp]);

	return initialized ? (
		<div className="app-wrapper">
			<HeaderContainer setMainMenuIsActive={setMainMenuIsActive} />
			<Sidebar
				mainMenuIsActive={mainMenuIsActive}
				setMainMenuIsActive={setMainMenuIsActive}
			/>
			<Main />
		</div>
	) : (
		<Preloader />
	);
};

const mapStateToProps = (state) => ({
	initialized: state.app.initialized,
});

export const AppWithComose = compose(
	connect(mapStateToProps, { initializeApp })
)(AppPure);

const App = () => (
	<HashRouter>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<AppWithComose />
			</ThemeProvider>
		</Provider>
	</HashRouter>
);

export default App;
