import React from 'react'
import style from './Sidebar.module.scss'

const Sidebar = () => {
  return (
    <nav className={style.nav}>
      <div>Profile</div>
      <div>Messages</div>
      <div>News</div>
      <div>Music</div>
      <div>Settings</div>
    </nav>
  )
}

export default Sidebar

