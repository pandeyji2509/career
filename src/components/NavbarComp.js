import React, { Component } from 'react'
import {Navbar,Nav,NavDropdown,Form,FormControl,Button}  from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Jobs from './Jobs';
import './navbar.css';
import Detail from './Detail';
import data from '../assets/data.json';
export default class NavbarComp extends Component {
  render() {
    return (
    <Router>
    <div>
    <Navbar className='parent-1' >
        <Navbar.Brand className='parent-2' href="#home"> Job-Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="">
          <Nav className="parent-3">
            <Nav.Link className="parent-4" as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link className="parent-5" as={Link} to={"/about"}>About</Nav.Link>
            <Nav.Link className="parent-6" as={Link} to={"/contact"}>Contact</Nav.Link>
            <Nav.Link className="parent-7" as={Link} to={"/jobs"}>Jobs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
      </div>
      <div className=''>
        <Routes>
            <Route  path="/about"
                exact element={<About />}>
            </Route>
            <Route  path="/contact"
                exact element={<Contact/>}>
            </Route>
            <Route  path="/"
                exact element={<Home/>}>
            </Route>
            <Route className=""  path="/jobs"
                exact element={<Jobs/>}>
            </Route>
            <Route className=""  path="/Detail"
                exact element={<Detail   />}>
            </Route>
        </Routes>
      </div>
      </Router>
    )
  }
}
