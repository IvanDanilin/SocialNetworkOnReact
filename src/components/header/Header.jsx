import React from 'react'
import logo from './logo192.png';
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='logo' />
    </header>
  )
}

export default Header