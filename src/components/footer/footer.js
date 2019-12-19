import React from 'react';
import { Link } from 'gatsby';
import './footer.css';

const Footer = () => (
    <div className="to-next-content">
        <Link to="/work" className="to-next">
            <div className="container">
                <div className="column">
                    <span>Learn more about AlienSoft</span>
                    <h2>Agency</h2>
                </div>
            </div>
        </Link>
    </div>
)

export default Footer;