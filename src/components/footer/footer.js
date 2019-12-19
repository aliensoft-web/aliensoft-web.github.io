import React from 'react';
import { Link } from 'gatsby';
import './footer.css';

const Footer = ({ description }) => (
    <div className="to-next-content">
        <Link to={description.url} className="to-next">
            <div className="container">
                <div className="column">
                    <span>{description.des}</span>
                    <h2>{description.title}</h2>
                </div>
            </div>
        </Link>
    </div>
)

export default Footer;