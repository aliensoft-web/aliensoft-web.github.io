import React from 'react';
import Fade from 'react-reveal/Fade';
import TextLoop from 'react-text-loop';
import './home-splash.css';

const HomeSplash = () => (
    <div className="home_splash">
        <div className="container">
            <div className="home_splash--inner">
                <Fade>
                <div className="home_splash--title">
                    <h1 className="typo_header">
                        <span className="text_crop">
                        We use the power of brand to make big things happen for your 
                        <TextLoop>
                        <span className="home_splash--current_word">product</span>
                        <span className="home_splash--current_word">customers</span>
                        <span className="home_splash--current_word">business</span>
                        <span className="home_splash--current_word">people</span>
                        <span className="home_splash--current_word">industry</span>
                        </TextLoop>
                        </span>
                    </h1>
                </div>
                </Fade>
                <div className="home_splash--cta"></div>
            </div>
        </div>
    </div>
);

export default HomeSplash;