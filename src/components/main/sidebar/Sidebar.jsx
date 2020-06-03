import React from 'react'
import s from './Sidebar.module.scss'

const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <nav className={s.nav}>
        <ul className={s.list}>
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

