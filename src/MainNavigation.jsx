import React from 'react'
import { NavLink } from 'react-router-dom'

class MainNavigation extends React.Component {
  render () {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        { this.props.children }
        <div className="main-footer">
          copyright &copy; 2018 Wasya co
        </div>
      </div>
    )
  }
}

export default MainNavigation

