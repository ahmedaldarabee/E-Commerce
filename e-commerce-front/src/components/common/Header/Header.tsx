import { Badge, Container,Nav,Navbar } from 'react-bootstrap'
import styles from './styles.module.css'
import { HeaderBasket } from '@components/ecommerce';

import { NavLink } from 'react-router-dom';

const { headerContainer , headerLogo} = styles;

const Header = () => {
    return (
        <header>
            <div className={headerContainer}>
                <h1 className={headerLogo}>
                    <span>Darabee </span> 
                    <Badge>Store</Badge> {/* custom name */}
                </h1>
                
                <HeaderBasket />
            </div>
            <Navbar expand="lg" className="bg-body-tertiary" bg='dark' data-bs-theme="dark">
                <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            {/* info links */}
                            <Nav className="me-auto">
                                
                                {/* Nav.Link: that mean this compo nent from bootstrap that act as={NavLink} */}
                                
                                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                                <Nav.Link as={NavLink} to="categories">Categories</Nav.Link>
                                <Nav.Link as={NavLink} to="about">About</Nav.Link>
                            </Nav>

                            {/* login links */}
                            <Nav>
                                <Nav.Link as={NavLink} to="login">Login</Nav.Link>
                                <Nav.Link as={NavLink} to="register">Register</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header