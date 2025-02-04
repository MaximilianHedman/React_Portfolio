import React from 'react';
import { projectData } from '../../data/projectData';
import './ProjectCard.css';

const ProjectCard = () => {
    return (
        <div className="project-cards-container">
            {projectData.map((project) => (
                <a className="card-link" href={project.link} key={project.id} target="_blank" rel="noopener noreferrer">
                    <div className="card">
                        <div className="card-img">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="card-text">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default ProjectCard;