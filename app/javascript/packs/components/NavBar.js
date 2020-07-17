import React from 'react'
import Nav from 'react-bootstrap/Nav'

function NavBar() {
  return (
<>
  <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="Search">Search</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="About us">About us</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="Log in">Log in</Nav.Link>
    </Nav.Item>
    
  </Nav>
</>
  )
}

export default NavBar
