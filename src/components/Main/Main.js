import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styles from './Main.module.scss';
import Preloader from '../common/Preloader/Preloader';
const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer'));
const Dialogs = React.lazy(() => import('./Dialogs/Dialogs'));
const Messages = React.lazy(() => import('./Messages/Messages'));
const Login = React.lazy(() => import('./Login/Login'));
const Music = React.lazy(() => import('./Music/Music'));
const News = React.lazy(() => import('./News/News'));
const Settings = React.lazy(() => import('./Settings/Settings'));
const UsersContainer = React.lazy(() => import('./Users/UsersContainer'));

const Main = () => (
	<main className={styles.main}>
		<React.Suspense fallback={<Preloader />}>
			<Switch>
				<Route path='/profile/:userId?' component={ProfileContainer} />
				<Route path='/dialogs' component={Dialogs} />
				<Route path='/dialog/:userId?' component={Messages} />
				<Route path='/news' component={News} />
				<Route path='/music' component={Music} />
				<Route path='/settings' component={Settings} />
				<Route path='/users' component={UsersContainer} />
				<Route path='/login' component={Login} />
				<Redirect from="/" to="/profile" />
				<Route path='*' render={() => <h2>404 NOT FOUND</h2>} />
			</Switch>
		</React.Suspense>
	</main>
);

export default Main;