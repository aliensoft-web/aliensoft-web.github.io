import React from 'react';
import ClientsList from '../clients-list';
import Fade from 'react-reveal/Fade';
import './agency-block.css';

const AgencyBlock = () => (
    <div className="agency-block">
        <Fade bottom>
            <p>Ramotion is a team of multidisciplinary digital product experts focused on branding, UI/UX design, mobile, and web development. We extend design, development and marketing departments of growing startups and Fortune 500 companies. Our San Francisco studio is intentionally small, working with a few clients at a time.</p>
            <h3>Distributed team of 34 experts</h3>
            <h3>Startup clients raised $750M+</h3>
            <h3>10 years of excellence</h3>
            <h2>Capabilities</h2>
            <h5>Marketing</h5>
            <ul>
                <li><a href="/category">Branding</a></li>
                <li><a href="/category">Web design</a></li>
            </ul>
            <h5>Product</h5>
            <ul>
                <li><a href="/category">UI/UX design</a></li>
                <li><a href="/category">App development</a></li>
            </ul>
            <h2>Clients</h2>
            <p>We use our digital product design and development expertise to achieve quantifiable business goals, build a strong design framework early on and empower our clients to continue maintaining a consistent product.</p>
            <ClientsList />
            <h2>Location</h2>
            <h5>United States</h5>
            <p>851 Burlway Rd, Suite 216, Burlingame, CA 94010</p>
            <h2>Social media</h2>
            <p className="agency-socials">
                <a href="dribble">Dribbble</a>
                <a href="twitter">Twitter</a>
                <a href="Insta">Instagram</a>
                <a href="github">GitHub</a>
            </p>
        </Fade>
    </div>
);

export default AgencyBlock;