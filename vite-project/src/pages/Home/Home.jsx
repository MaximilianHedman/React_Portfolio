import React from 'react';
import './Home.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import BackToTopBtn from '../../components/BackToTopBtn/BackToTopBtn';

const Home = () => {
    return (
        <main className='home-container'>
            <section className='card-container'>
                <ProjectCard />
            </section>
            <BackToTopBtn />
        </main>
    )
}

export default Home