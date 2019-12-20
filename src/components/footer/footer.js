import React from 'react';
import { Link } from 'gatsby';
import './footer.css';

const Footer = ({ data }) => (
    <div className="to-next-content">
        <Link to={data.url} className="to-next">
            <div className="container">
                <div className="column">
                    <span>{data.des}</span>
                    <h2>{data.title}</h2>
                </div>
            </div>
        </Link>
    </div>
)

export default Footer;