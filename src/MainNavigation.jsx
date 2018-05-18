import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class MainNavigation extends React.Component {
  render () {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Annesque</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <ul className="main-menu" >
            <li><Link to="/">News</Link></li>
            <li><Link to="#">Location</Link></li>
            <li><Link to="#">Schedule</Link></li>
            <li><Link to="#">Curriculum</Link></li>
            <li><Link to="#">Instructors</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </Navbar>
        <hr style={{ border: '1px solid green' }} />

        { this.props.children }

        <hr style={{ border: '1px solid green' }} />
        <div className="main-footer">
          copyright &copy; 2018 Wasya co
        </div>
      </div>
    )
  }
}

export default MainNavigation

