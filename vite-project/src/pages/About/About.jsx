import React from 'react';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import BackToTopBtn from '../../components/BackToTopBtn/BackToTopBtn';
import profile from '../../assets/profile.svg';
import './About.css';

const About = () => {
    return (
        <main>
            <img id="profile-img" src={profile} alt="profile" />
            <section>
                <div className="introduction">
                    <p>My name is Maximilian and I'm an UX/UI designer with a passion for Graphics Design and App Development, based in Stockholm.</p>
                </div>
            </section>
            <SocialLinks />
            <section className="contact-info">
                <p className="light-mode bold">Contact me:</p>
                <p className="red">maximilian.hedman@chasacademy.se</p>
                <p className="light-mode">Full resume available on request</p>
            </section>
            <BackToTopBtn />
        </main>
    )
}

export default About