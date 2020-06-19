import React from 'react';
import { Route } from 'react-router-dom';
import styles from './Main.module.scss';

import ProfileContainer from './Profile/ProfileContainer';
import DialogsListContainer from './Dialogs/DialogsList/DialogsListContainer';
import MessagesContainer from './Dialogs/Messages/MessagesContainer';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import UsersContainer from './Users/UsersContainer';
import Login from './Login/Login';

const Main = () => (
	<main className={styles.main}>
		<Route path="/profile/:userId?" render={() => <ProfileContainer />} />
		<Route path="/dialogs" render={() => <DialogsListContainer />} />
		<Route path="/dialog/:userId?" render={() => <MessagesContainer />} />
		<Route path="/news?" component={News} />
		<Route path="/music" component={Music} />
		<Route path="/settings" component={Settings} />
		<Route path="/users" render={() => <UsersContainer />} />
		<Route path="/login" render={() => <Login />} />
	</main>
);

export default Main;
