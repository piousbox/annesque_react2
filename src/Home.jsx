import React from 'react'
import { 
  Grid, Row, Col,
  Button, 
} from 'react-bootstrap'

class Home extends React.Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col sm={12}>
            <h1>World-class Competition Salsa<br />in Santa Cruz, CA</h1>
            <p>Want to up your salsa game? Now’s your chance! Join us for an Advanced Salsa Workshop led by Beni, and impress your next dance partner with a graceful dip, snappy turn, and elegant flourish! We are committed to helping nurture the vibrant salsa community here in Santa Cruz County by organizing workshops where you can polish your skills and elevate your technique. You love dancing, and so do we!</p>
            <p>This workshop is intended for dancers of an intermediate level, and instruction will be tailored to your level of comfort and skill. Our flexible routines can be adjusted to your personal style. This time around, we will pay some special attention to dips: learn how to make this move beautiful and exciting, while maintaining safety and comfort for both partners!</p>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <h1>Instructors</h1>
          </Col>
          <Col sm={4}>
            <h1>Beni</h1>
            <p>Beni is cool. He's from Mexico, he actually knows this stuff.</p>
          </Col>
          <Col sm={4}>
            <h1>Hannah</h1>
            <p>Hannah is cool. She helps us out. She actually dances in a lot of different styles.</p>
          </Col>
          <Col sm={4}>
            <h1>Victor</h1>
            <p>Victor is alright. He moves furniture around and makes sure things go smoothly from operation point of view.</p>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <h1>Map, Address & Directions</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <h3>Lauden Nelson Community Center</h3>
            301 Center St.,<br />
            Santa Cruz, CA 95060
          </Col>
          <Col sm={6}>
            <div id="map" style={{ width: '100%', height: '300px' }} ></div>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <h1>Schedule</h1>
            <ul>
              <li>Friday May 4th, 7-9pm</li>
              <li>Friday May 11th, 7-9pm</li>
              <li>Friday May 18th, 7-9pm</li>
              <li>Friday May 25th, 7-9pm</li>
              <li>Friday June 1st, 7-9pm</li>
              <li>Friday June 8th, 7-9pm</li>
            </ul>

            <br /><br />
            <div className="center"><Button to="https://www.eventbrite.com/e/advanced-salsa-workshop-santa-cruz-tickets-45753801853">Buy Tickets</Button></div>
            <br /><br />
          </Col>
        </Row>
    </Grid>)
  }
}

export default Home

