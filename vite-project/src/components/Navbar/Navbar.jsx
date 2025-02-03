import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="brand-container">
                <h2>Maximilian Hedman</h2>
            </div>
            <div className='nav-links-container'>
                <ul className='nav-links'>
                    <li>
                        <Link to='/' className='navbar-link'>
                            <FontAwesomeIcon icon='bars' />
                            {/* <i class="fa fa-bars w3-xlarge"></i> */}
                        </Link>
                    </li>
                </ul>
                <ul className='nav-links-desktop'>
                    <li>
                        <Link to='/' className='navbar-link'>
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to='/about' className='navbar-link'>
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar