import React from 'react'
import { Link } from 'react-router-dom'

class MainNavigation extends React.Component {
  render () {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/blog">Blog2</Link></li>
          <li><Link to="/contact">Contact</Link></li>
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

