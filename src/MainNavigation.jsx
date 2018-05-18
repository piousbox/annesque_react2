import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Navbar, Nav, NavItem,
  Grid, Row, Col,
} from 'react-bootstrap'

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
          <ul className="main-menu">
            <li><Link to="/">News</Link></li>
            <li><Link to="#">Location</Link></li>
            <li><Link to="#">Schedule</Link></li>
            <li><Link to="#">Curriculum</Link></li>
            <li><Link to="#">Instructors</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </Navbar>

        { this.props.children }

        <div className="main-footer">
          <Grid>
            <Row>
              <Col sm={12}>
                <div className="center">Copyright &copy; 2018 Wasya co</div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}

export default MainNavigation

