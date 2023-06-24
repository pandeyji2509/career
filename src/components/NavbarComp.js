import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
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
import Detail from './Detail/Detail';
import data from '../Assets/data.json';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { icons } from 'react-icons';
import { GrUserWorker } from 'react-icons/gr';
import {RxHamburgerMenu} from 'react-icons/rx';
function NavbarComp() {
  return (
    <Router>
      <header>
        <a href='' className='logo'>Logo</a>
        <input type="checkbox" id="menu-bar"/>
        <label for="menu-bar"><RxHamburgerMenu/></label>
        <nav className='navbar'>
          <ul>
            <li><Link as={Link} to={"/"}>Home</Link></li>
            <li><Link as={Link} to={"/about"}>about</Link></li>
            <li><Link as={Link} to={"/contact"}>Contact</Link></li>
            <li><Link as={Link} to={"jobs"}>Jobs</Link></li>
          </ul>
        </nav>
      </header>
      <div className=''>
        <Routes>
          <Route path="/about"
            exact element={<About />}>
          </Route>
          <Route path="/contact"
            exact element={<Contact />}>
          </Route>
          <Route path="/"
            exact element={<Home />}>
          </Route>
          <Route className="" path="/jobs"
            exact element={<Jobs />}>
          </Route>
          <Route className="" path="/Detail/:id"
            exact element={<Detail />}>
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default NavbarComp;