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
            <Route path='/profile' render={() => <Profile posts={props.state.posts} addPost={props.addPost} />} />
            <Route path='/dialogs' render={() => <Dialogs inputMessage = {props.state.inputMessage}  dialogsData={props.state.dialogsData} sendMessage={props.sendMessage} getCurrentId={props.getCurrentId} onMessageChange={props.onMessageChange} />} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
        </main>
    );
};

export default Main;
