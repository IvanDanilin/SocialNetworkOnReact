import React from 'react'
import styles from './Sidebar.module.scss'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li><NavLink to='/profile' activeClassName={styles.active}>Profile</NavLink></li>
          <li><NavLink to='/dialogs' activeClassName={styles.active}>Dialogs</NavLink></li>
          <li><NavLink to='/news' activeClassName={styles.active}>News</NavLink></li>
          <li><NavLink to='/music' activeClassName={styles.active}>Music</NavLink></li>
          <li><NavLink to='/settings' activeClassName={styles.active}>Settings</NavLink></li>
          <li><NavLink to='/users' activeClassName={styles.active}>Users</NavLink></li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar

