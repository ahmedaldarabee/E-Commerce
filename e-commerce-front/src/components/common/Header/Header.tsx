import { Badge, Container,Nav,Navbar } from 'react-bootstrap'
import styles from './styles.module.css'
import { HeaderBasket,HeaderWishlist } from '@components/ecommerce';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const { headerContainer , headerLogo,flexCenter,gap10} = styles;

const Header = () => {
    return (
        <header>
            <div className={headerContainer}>
                <h1 className={headerLogo}>
                    <span>Darabee </span> 
                    <Badge>Store</Badge>
                </h1>
                
                <div className={clsx(flexCenter,gap10)}>
                    <HeaderWishlist />
                    <HeaderBasket />
                </div>
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