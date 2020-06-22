import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import './App.scss';
import Preloader from './components/common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import './null.scss';
import { initializeApp } from './redux/reducers/app-reducer';

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}
	render() {
		return (
			this.props.initialized ? (
				<div className="app-wrapper">
					<HeaderContainer />
					<Sidebar />
					<Main />
				</div>
			)
			: <Preloader />
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized,
});

export default compose(
	connect(mapStateToProps, { initializeApp })
)(App);