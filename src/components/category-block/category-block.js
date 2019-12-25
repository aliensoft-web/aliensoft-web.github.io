import React from 'react';
import Fade from 'react-reveal/Fade';
import './category-block.css';
import nbc from '../../images/NBCU.jpg';
import turo from '../../images/Turo.jpg';
import salesforce from '../../images/Salesforce.jpg';

const CategoryBlock = () => (
    <div className="category-block">
        <Fade bottom>
            <p className="description">Our app development agency team builds mobile, web, Apple TV, and Apple Watch applications using Swift, Kotlin and ReactJS for innovative brands and companies from the San Francisco Bay Area and other big technology hubs.</p>
            <div className="card-column-3">
                <div className="card">
                    <div className="content">
                        <a href="/project" className="card-video">NBCUniversal</a>
                        <div className="card-video-inner">
                            <img src={nbc} alt="nbcuniversal" />
                        </div>
                        <p>Apple TV app UI development</p>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <a href="/project" className="card-video">Turo</a>
                        <div className="card-video-inner">
                            <img src={turo} alt="Turo" />
                        </div>
                        <p>Redesign of the support portal and 30% improvement in users’ ability to get the answers they want</p>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <a href="/project" className="card-video">Salesforce</a>
                        <div className="card-video-inner">
                            <img src={salesforce} alt="Salesforce" />
                        </div>
                        <p>Developing micro-interactions for the Lightning Design System</p>
                    </div>
                </div>
            </div>
        </Fade>
    </div>
);

export default CategoryBlock;