import React from 'react'
import logo from './logo192.png';
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoBlock}>
        <div className={styles.logoImage}><img src={logo} alt='logo' /></div>
        <a href='#' className={styles.logoName}>WhoIAm</a>
      </div>
    </header>
  )
}

export default Header