import React from 'react';
import Fade from 'react-reveal/Fade';
import './main-header.css';

const MainHeader = ({ description }) => (
    <Fade bottom>
        <div className="column">
            <h1 className="header is-in-viewport">
                {description}
            </h1>
        </div>
    </Fade>
)

export default MainHeader;