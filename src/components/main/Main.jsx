import React from "react"
import Sidebar from "./Sidebar/Sidebar"
import Profile from "./Profile/Profile"
import s from "./Main.module.scss"


const Main = () => {
    return (
        <main className={s.main}>
            <Sidebar />
            <Profile />
        </main>
    )
}

export default Main