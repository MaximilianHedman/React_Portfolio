import React from 'react';
import { Link } from "react-router-dom";
import './ProjectCard.css';

const ProjectCard = () => {
    return (
        <a className="card-link" href="https://www.figma.com/design/Ql9U2CxELqaTBtVrBhOkn4/V%C3%84NNER?node-id=793-5315&t=lXZwuEP3nbLxBmQV-1" target="_blank">
            <div className="card">
                <div className="card-img">
                    <img className="card-img" src="../../assets/figma_Vanner.svg" alt="Figma Vanner" />
                </div>
                <div className="card-text">
                    <h4>VÄNNER App</h4>
                    <p>An app to find new friends & activities</p>
                </div>
            </div>
        </a>
    )
}

export default ProjectCard