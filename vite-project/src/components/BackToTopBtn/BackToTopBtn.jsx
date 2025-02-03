import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BackToTopBtn.css';

const BackToTopBtn = () => {
    return (
        <section className="back-to-top">
            <Link to="#">
                <FontAwesomeIcon icon='arrowup' />
                {/* <span className="fa fa-long-arrow-up w3-small"></span> */}
                <span className="bold">Back to Top</span>
            </Link>
        </section>
    )
}

export default BackToTopBtn