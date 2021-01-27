import React from 'react'
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Container>
                <Link className="navbar-brand " to="/">SoloShop</Link>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/cart"><i className='fas fa-shopping-cart m-1' />Cart
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/login"><i className='fas fa-user m-1' />Sign In
                            </Link>
                        </li>
                    </ul>
                </div>
                </Container>
            </nav>
        </header>
    )
}

export default Header
