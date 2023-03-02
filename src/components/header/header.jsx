import React from 'react'

import Logo from '../../assets/img/Logo.png'

import classes from './header.module.scss'

function Header() {
  return (
    <div className={classes.header}>
      <img className={classes['header__img']} src={Logo} alt="logo" />
    </div>
  )
}

export default Header
