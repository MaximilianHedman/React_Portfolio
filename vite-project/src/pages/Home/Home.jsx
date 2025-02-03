import React from 'react';
import './Home.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import BackToTopBtn from '../../components/BackToTopBtn/BackToTopBtn';

const Home = () => {
    return (
        <main>
            <section>
                <ProjectCard />
            </section>
            <BackToTopBtn />
        </main>
    )
}

export default Home