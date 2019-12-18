import React from 'react';
import Fade from 'react-reveal/Fade';
import './listboard.css';
import firefox from '../../images/firefox-img.png';
import netflix from '../../images/netflix.svg';
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
                <a href="/" className="card-video">Firefox</a>
                <div className="card-video-inner">
                    <img src={firefox} alt="firefox rebranding" />
                </div>
                <span className="card-link">Firefox</span>
                <p>Official Firefox rebrand</p>
            </div>
        </div>

        <div className="card card-column" style={{'gridRowEnd': 'span 18'}}>
            <div className="content">
                <a href="/" className="card-video">Netflix</a>
                <div className="card-video-inner">
                    <img src={netflix} alt="firefox rebranding" />
                </div>
                <p>Series of visual concepts for improving the user experience</p>
            </div>
        </div>

        <div className="card card-column" style={{'gridRowEnd': 'span 21'}}>
            <div className="content">
                <a href="/" className="card-video">NBCUniversal</a>
                <div className="card-video-inner">
                    <img src={nbc} alt="firefox rebranding" />
                </div>
                <span className="card-link">NBCUniversal</span>
                <p>Apple TV app UI development</p>
            </div>
        </div>

        <div className="card card-column" style={{'gridRowEnd': 'span 22'}}>
            <div className="content">
                <a href="/" className="card-video">Salesforce</a>
                <div className="card-video-inner">
                    <img src={salesforce} alt="Salesforce rebranding" />
                </div>
                <span className="card-link">Salesforce</span>
                <p>Developing micro-interactions for the Lightning Design System</p>
            </div>
        </div>
        
        <div className="card card-column" style={{'gridRowEnd': 'span 22'}}>
            <div className="content">
                <a href="/" className="card-video">Volusion</a>
                <div className="card-video-inner">
                    <img src={volusion} alt="Volusion rebranding" />
                </div>
                <span className="card-link">Volusion</span>
                <p>Rebranding and e-commerce solution used by 180,000 entrepreneurs</p>
            </div>
        </div>

        <div className="card card-column" style={{'gridRowEnd': 'span 22'}}>
            <div className="content">
                <a href="/" className="card-video">Turo</a>
                <div className="card-video-inner">
                    <img src={turo} alt="Turo rebranding" />
                </div>
                <span className="card-link">Turo</span>
                <p>Redesign of the support portal and 30% improvement in users’ ability to get the answers they want</p>
            </div>
        </div>

        <div className="card card-column" style={{'gridRowEnd': 'span 19'}}>
            <div className="content">
                <a href="/" className="card-video">Descript</a>
                <div className="card-video-inner">
                    <img src={descript} alt="Descript rebranding" />
                </div>
                <span className="card-link">Descript</span>
                <p>Design for the world's first audio word processor</p>
            </div>
        </div>

        <div className="card card-column" style={{'gridRowEnd': 'span 20'}}>
            <div className="content">
                <a href="/" className="card-video">Tile</a>
                <div className="card-video-inner">
                    <img src={tile} alt="Tile rebranding" />
                </div>
                <span className="card-link">Tile</span>
                <p>Designing a new onboarding flow that increased completed sessions to over 60%</p>
            </div>
        </div>

        <div className="card card-column" style={{'gridRowEnd': 'span 20'}}>
            <div className="content">
                <a href="/" className="card-video">Cellebrite</a>
                <div className="card-video-inner">
                    <img src={cellebrite} alt="Cellebrite rebranding" />
                </div>
                <span className="card-link">Cellebrite</span>
                <p>Iconography guidelines, assets and web design for the advanced and trusted digital forensics solution</p>
            </div>
        </div>

        <div className="card card-column" style={{'gridRowEnd': 'span 20'}}>
            <div className="content">
                <a href="/" className="card-video">Wyre</a>
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