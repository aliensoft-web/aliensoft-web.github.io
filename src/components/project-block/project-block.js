import React from 'react';
import Fade from 'react-reveal/Fade';
import './project-block.css';

const ProjectBlock = () => (
    <section className="container category-content project-block">
        <div className="column">
            <Fade bottom>
                <h2>Findability challenge</h2>
                <p>Turo faced UX and UI challenges regarding their customer support portal. Users struggled to find the information they needed and thus had to create ticket requests. It’s vital for support teams to address those tickets as soon as possible, but the influx of tickets overloaded the team and they began to fall behind. This is what formed our goals, which were twofold. First, we needed to increase the “self-service” score. Second, we needed to design a fresh, Turo-branded look for the support portal.</p>
                <h2>Problem statement</h2>
                <p>We began the collaboration by examining the most up-to-date analytics for Turo’s support center. At project kick-off, we understood their user behavior to be the following: 53% of users left the support center at the home page, 26% utilized alternative resources, and only 21% could find what they were looking for.</p>
            </Fade>
        </div>
    </section>
);

export default ProjectBlock;