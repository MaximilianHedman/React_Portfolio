import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/maximilian-hedman-b10a2915b/" target="_blank">
                        <FontAwesomeIcon icon='linkedin' />
                        {/* <i className="fa fa-linkedin w3-large"></i> */}
                    </a>
                </li>
                <li>
                    <a href="https://github.com/MaximilianHedman" target="_blank">
                        <FontAwesomeIcon icon='github' />
                        {/* <i className="fa fa-github w3-large"></i> */}
                    </a>
                </li>
                <li>
                    <a href="https://sv-se.facebook.com/maximilian.hedman" target="_blank">
                        <FontAwesomeIcon icon='facebook' />
                        {/* <i className="fa fa-facebook w3-large"></i> */}
                    </a>
                </li>
                <li>
                    <a href="https://sv-se.facebook.com/maximilian.hedman" target="_blank">
                        <FontAwesomeIcon icon='envelope' />
                        {/* <i className="fa fa-envelope w3-large"></i> */}
                    </a>
                </li>
            </ul>
            <p>Maximilian Hedman &copy; 2024</p>
        </footer>
    )
}

export default Footer