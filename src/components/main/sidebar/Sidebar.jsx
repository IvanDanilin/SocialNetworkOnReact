import React from 'react'
import style from './Sidebar.module.scss'

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <nav className={style.nav}>
        <ul className={style.list}>
          <li><a href='#'>Profile</a></li>
          <li><a href='#'>Messages</a></li>
          <li><a href='#'>News</a></li>
          <li><a href='#'>Music</a></li>
          <li><a href='#'>Settings</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar

