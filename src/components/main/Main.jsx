import React from 'react';
import styles from './Main.module.scss';
import ProfileContainer from './Profile/ProfileContainer';
import Dialogs from './Dialogs/Dialogs';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import { Route, Redirect } from 'react-router-dom';
import UsersContainer from './Users/UsersContainer';

const Main = () => {
    return (
        <main className={styles.main}>
            <Redirect from='/' to='/profile' />
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/dialogs' render={() => <Dialogs />} />
            <Route path='/news?' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
            <Route path='/users' render={ () => <UsersContainer />} />
        </main>
    );
};

export default Main;
