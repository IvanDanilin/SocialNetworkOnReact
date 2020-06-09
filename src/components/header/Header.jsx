import React from 'react'
import logo from './logo192.png';
import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoBlock}>
        <div className={styles.logoImage}><img src={logo} alt='logo' /></div>
        <NavLink to={'/profile'} className={styles.logoName}>WhoIAm</NavLink>
      </div>
    </header>
  )
}

export default Header