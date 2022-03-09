import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import snubesLogo from '../images/snubes-logo.png'
import { Link } from "react-scroll";


class Header extends Component {
	render() {
		return (
			<>
			<Navbar bg="light" expand="lg" className="m-auto sticky top-0 z-50">
				<Navbar.Brand href="#home" className="sm:ml-1 lg:ml-20">
					<img src={snubesLogo} onClick={() => window.location.reload()} width="160" alt="snubes logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" className="mr-28">
					<Nav className="ml-auto">
					
						<Nav.Link href="#aboutUs">
						<Link
							activeClass="active"
							to="aboutUs"
							spy={true}
							smooth={true}
							offset={-70}
							duration={600}
						> About Us</Link>
						</Nav.Link>
						<Nav.Link href="#howItWorks">
						<Link
							activeClass="active"
							to="servicesOffers"
							spy={true}
							smooth={true}
							offset={-70}
							duration={600}
						>How it works</Link></Nav.Link>
						<Nav.Link href="#partner">
						<Link
							activeClass="active"
							to="testimonials"
							spy={true}
							smooth={true}
							offset={-70}
							duration={600}
						> Become a partner</Link>
						</Nav.Link>
						<NavDropdown title="USD" id="basic-nav-dropdown">
							<NavDropdown.Item href="#">USD</NavDropdown.Item>
							<NavDropdown.Item href="#">EUR</NavDropdown.Item>
							<NavDropdown.Item href="#">RS</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="EU" id="basic-nav-dropdown">
							<NavDropdown.Item href="#">EU</NavDropdown.Item>
							<NavDropdown.Item href="#">DE</NavDropdown.Item>
							<NavDropdown.Item href="#">IT</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="#signIn">
						<Link
							activeClass="active"
							to="contactForm"
							spy={true}
							smooth={true}
							offset={-70}
							duration={600}
						>Sign In</Link></Nav.Link>
						<Nav.Link href="#getAccess">Get Access</Nav.Link>
					</Nav>
					
				</Navbar.Collapse>
			</Navbar>
			</>
		)
	}
}

export default Header;