import React from "react"
import s from "./Main.module.scss"
import Profile from "./Profile/Profile"
import Dialogs from "./Dialogs/Dialogs"
import News from "./News/News"
import Music from "./Music/Music"
import Settings from "./Settings/Settings"
import { Route } from "react-router-dom"


const Main = () => {
    return (
        <main className={s.main}>
            <Route path="/profile" component={Profile} />
            <Route path="/dialogs" component={Dialogs} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
        </main>
    )
}

export default Main