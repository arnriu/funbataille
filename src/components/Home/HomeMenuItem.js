import React from 'react'
import { NavLink } from 'react-router-dom'

import Icon from '../Icon'

const btnBody = (icon, label) => (
  <>
    <Icon name={icon} className="home-menu-icon" />
    {label}
  </>
)

const buttonTag = {
  navlink: ({ to, label, icon, ...rest }) => (
    <NavLink to={to} className="home-menu-button" {...rest}>
      {btnBody(icon, label)}
    </NavLink>
  ),
  a: ({ to, label, icon, ...rest }) => (
    <a
      href={to}
      target="_blank"
      rel="noreferrer noopener"
      className="home-menu-button"
      {...rest}
    >
      {btnBody(icon, label)}
    </a>
  ),
}

const HomeMenuItem = ({ to, ...rest }) => (
  <li className="home-menu-item">
    {to.substring(0, 4) === 'http'
      ? buttonTag['a']({ to, ...rest })
      : buttonTag['navlink']({ to, ...rest })}
  </li>
)

export default HomeMenuItem
