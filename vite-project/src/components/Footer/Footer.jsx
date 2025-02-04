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
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/MaximilianHedman" target="_blank">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                </li>
                <li>
                    <a href="https://sv-se.facebook.com/maximilian.hedman" target="_blank">
                        <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </a>
                </li>
                <li>
                    <a href="https://sv-se.facebook.com/maximilian.hedman" target="_blank">
                        <FontAwesomeIcon icon={['fas', 'envelope']} />
                    </a>
                </li>
            </ul>
            <p>Maximilian Hedman &copy; 2024</p>
        </footer>
    )
}

export default Footer