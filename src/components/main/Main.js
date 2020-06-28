import React from 'react';
import { Route } from 'react-router-dom';
import Dialogs from './Dialogs/Dialogs';
import Messages from './Messages/Messages';
import Login from './Login/Login';
import styles from './Main.module.scss';
import Music from './Music/Music';
import News from './News/News';
import ProfileContainer from './Profile/ProfileContainer';
import Settings from './Settings/Settings';
import UsersContainer from './Users/UsersContainer';

const Main = () => (
	<main className={styles.main}>
		<Route path="/profile/:userId?" component={ProfileContainer} />
		<Route path="/dialogs" component={Dialogs} />
		<Route path="/dialog/:userId?" component={Messages} />
		<Route path="/news" component={News} />
		<Route path="/music" component={Music} />
		<Route path="/settings" component={Settings} />
		<Route path="/users" component={UsersContainer} />
		<Route path="/login" component={Login} />
	</main>
);

export default Main;
