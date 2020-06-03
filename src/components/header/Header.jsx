import React from 'react'
import logo from './logo192.png';
import s from './Header.module.scss'

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logoBlock}>
        <div className={s.logoImage}><img src={logo} alt='logo' /></div>
        <a href='#' className={s.logoName}>WhoIAm</a>
      </div>
    </header>
  )
}

export default Header