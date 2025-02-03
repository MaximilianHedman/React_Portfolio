import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialLinks.css';

const SocialLinks = () => {
    return (
        <section className="link-container">
            <ul>
                <a href="https://www.linkedin.com/in/maximilian-hedman-b10a2915b/" target="_blank">
                    <li>
                        <FontAwesomeIcon icon='linkedin' />
                        {/* <i className="fa fa-linkedin w3-large"></i> */}
                    </li>
                </a>
                <a href="https://github.com/MaximilianHedman" target="_blank">
                    <li>
                        <FontAwesomeIcon icon='github' />
                        {/* <i className="fa fa-github w3-large"></i> */}
                    </li>
                </a>
                <a href="https://sv-se.facebook.com/maximilian.hedman" target="_blank">
                    <li>
                        <FontAwesomeIcon icon='facebook' />
                        {/* <i className="fa fa-facebook w3-large"></i> */}
                    </li>
                </a>
                <a href="mailto:maximilian.hedman@chasacademy.se" target="_blank">
                    <li>
                        <FontAwesomeIcon icon='envelope' />
                        {/* <i className="fa fa-envelope w3-large"></i> */}
                    </li>
                </a>
            </ul>
        </section>
    )
}

export default SocialLinks