import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import './listboard.css';
import firefox from '../../images/firefox-img.png';
import mozillaLabs from '../../images/mozilla-labs.jpg';
import nbc from '../../images/NBCU.jpg';
import salesforce from '../../images/Salesforce.jpg';
import volusion from '../../images/volusion.png';
import turo from '../../images/Turo.jpg';
import descript from '../../images/descript.png';
import tile from '../../images/tile.png';
import cellebrite from '../../images/cellebrite.jpg';
import wyre from '../../images/wyre.png';


const Listboard = () => (
    <div className="listboard column">
        <Fade bottom>
        <div className="card card-column" style={{'gridRowEnd': 'span 21'}}>
            <div className="content">
                <Link to="/project" className="card-video">Mozilla Labs</Link>
                <div className="card-video-inner">
                    <img src={mozillaLabs} alt="mozilla rebranding" />
                </div>
                <span className="card-link">Mozilla Labs</span>
                <p>Designing a website for innovative projects by Mozilla</p>
            </div>
        </div>

        <div className="card card-column" style={{'gridRowEnd': 'span 19', 'marginTop': '30px'}}>
            <div className="content">
                <Link to="/project" className="card-video">Firefox</Link>
                <div className="card-video-inner">
                    <img src={firefox} alt="firefox rebranding" />
                </div>
                <span className="card-link">Firefox</span>
                <p>Official Firefox rebrand</p>
            </div>
        </div>

        <div className="card card-column" style={{'gridRowEnd': 'span 21'}}>
            <div className="content">
                <Link to="/project" className="card-video">NBCUniversal</Link>
                <div className="card-video-inner">
                    <img src={nbc} alt="firefox rebranding" />
                </div>
                <span className="card-link">NBCUniversal</span>
                <p>Apple TV app UI development</p>
            </div>
        </div>

        <div className="card card-column" style={{'gridRowEnd': 'span 22'}}>
            <div className="content">
                <Link to="/project" className="card-video">Salesforce</Link>
                <div className="card-video-inner">
                    <img src={salesforce} alt="Salesforce rebranding" />
                </div>
                <span className="card-link">Salesforce</span>
                <p>Developing micro-interactions for the Lightning Design System</p>
            </div>
        </div>
        
        <div className="card card-column" style={{'gridRowEnd': 'span 22'}}>
            <div className="content">
                <Link to="/project" className="card-video">Volusion</Link>
                <div className="card-video-inner">
                    <img src={volusion} alt="Volusion rebranding" />
                </div>
                <span className="card-link">Volusion</span>
                <p>Rebranding and e-commerce solution used by 180,000 entrepreneurs</p>
            </div>
        </div>

        <div className="card card-column" style={{'gridRowEnd': 'span 22'}}>
            <div className="content">
                <Link to="/project" className="card-video">Turo</Link>
                <div className="card-video-inner">
                    <img src={turo} alt="Turo rebranding" />
                </div>
                <span className="card-link">Turo</span>
                <p>Redesign of the support portal and 30% improvement in users’ ability to get the answers they want</p>
            </div>
        </div>

        <div className="card card-column" style={{'gridRowEnd': 'span 19'}}>
            <div className="content">
                <Link to="/project" className="card-video">Descript</Link>
                <div className="card-video-inner">
                    <img src={descript} alt="Descript rebranding" />
                </div>
                <span className="card-link">Descript</span>
                <p>Design for the world's first audio word processor</p>
            </div>
        </div>

        <div className="card card-column" style={{'gridRowEnd': 'span 20'}}>
            <div className="content">
                <Link to="/project" className="card-video">Tile</Link>
                <div className="card-video-inner">
                    <img src={tile} alt="Tile rebranding" />
                </div>
                <span className="card-link">Tile</span>
                <p>Designing a new onboarding flow that increased completed sessions to over 60%</p>
            </div>
        </div>

        <div className="card card-column" style={{'gridRowEnd': 'span 20'}}>
            <div className="content">
                <Link to="/project" className="card-video">Cellebrite</Link>
                <div className="card-video-inner">
                    <img src={cellebrite} alt="Cellebrite rebranding" />
                </div>
                <span className="card-link">Cellebrite</span>
                <p>Iconography guidelines, assets and web design for the advanced and trusted digital forensics solution</p>
            </div>
        </div>

        <div className="card card-column" style={{'gridRowEnd': 'span 20'}}>
            <div className="content">
                <Link to="/project" className="card-video">Wyre</Link>
                <div className="card-video-inner">
                    <img src={wyre} alt="Wyre rebranding" />
                </div>
                <span className="card-link">Wyre</span>
                <p>Rebranding a solution that securely routes money abroad. Acquired by WorldFirst</p>
            </div>
        </div>
    </Fade>
    </div>
)

export default Listboard;