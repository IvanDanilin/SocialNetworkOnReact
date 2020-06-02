import React from "react"
import Sidebar from "./sidebar/Sidebar"
import Profile from "./profile/Profile"
import Styles from "./Main.module.scss"


const Main = () => {
    return (
        <main className={Styles.main}>
            <Sidebar />
            <Profile />
        </main>
    )
}

export default Main