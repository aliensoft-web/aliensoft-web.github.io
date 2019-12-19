import React from 'react';
import Fade from 'react-reveal/Fade';
import './main-header.css';

const MainHeader = () => (
    <Fade bottom>
        <div className="column">
            <h1 className="header is-in-viewport">
                We take digital experiences to the next level
            </h1>
        </div>
    </Fade>
)

export default MainHeader;