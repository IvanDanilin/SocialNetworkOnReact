import React from 'react';
import styles from './Main.module.scss';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import { Route } from 'react-router-dom';

const Main = (props) => {
    return (
        <main className={styles.main}>
            <Route path='/profile' render={() => <Profile store={props.store} />} />
            <Route path='/dialogs' render={() => <Dialogs store={props.store} />} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
        </main>
    );
};

export default Main;
