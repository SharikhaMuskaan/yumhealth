import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Recipe from './Recipe';

export const NavBar = () => {
	const [activeLink, setActiveLink] = useState('home');
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	};

	const handleSearch = (event) => {
		event.preventDefault();
		const searchInput = document.querySelector('.search-bar input');
		const searchQuery = searchInput.value;
		console.log('Search query:', searchQuery);
	};

	return (
		<div className="navbar-container">
			<Navbar expand="lg" className={`${scrolled ? 'scrolled' : ''} bg-dark`}>
				<Container fluid>
					<Navbar.Brand href="#home">
						<img src={logo} alt="Home" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll" className="justify-content-center">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: '100px' }}
							navbarScroll
						>
							<Nav.Link
								className={
									activeLink === 'mealPlans'
										? 'active navbar-link'
										: 'navbar-link'
								}
								onClick={() => onUpdateActiveLink('mealPlans')}
							>
								Meal Plans
							</Nav.Link>
							<Nav.Link
								className={
									activeLink === 'news' ? 'active navbar-link' : 'navbar-link'
								}
								onClick={() => onUpdateActiveLink('news')}
							>
								News
							</Nav.Link>
							<Nav.Link
								className={
									activeLink === 'featured'
										? 'active navbar-link'
										: 'navbar-link'
								}
								onClick={() => onUpdateActiveLink('featured')}
							>
								Featured
							</Nav.Link>
							<Nav.Link
								as={Link}
								to="/recipes"
								className={
									activeLink === 'recipes'
										? 'active navbar-link'
										: 'navbar-link'
								}
								onClick={() => onUpdateActiveLink('recipes')}
							>
								Recipes
							</Nav.Link>
							<Nav.Link
								className={
									activeLink === 'faqs' ? 'active navbar-link' : 'navbar-link'
								}
								onClick={() => onUpdateActiveLink('faqs')}
							>
								FAQs
							</Nav.Link>
							<Nav.Link>
								<Link
									to="/login"
									className={
										activeLink === 'login'
											? 'active navbar-link login-link'
											: 'navbar-link login-link'
									}
								>
									Login
								</Link>
							</Nav.Link>
						</Nav>
						<Form className="d-flex">
							<Form.Control
								type="search"
								placeholder="Search"
								className="me-2 custom-nav-search"
								aria-label="Search"
							/>
							<Button
								variant="outline-secondary"
								className="custom-nav-search-button"
							>
								Search
							</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};
