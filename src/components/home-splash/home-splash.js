import React from 'react';
import './home-splash.css';

const HomeSplash = () => (
    <div className="home_splash">
        <div className="container">
            <div className="home_splash--inner">
                <div className="home_splash--title">
                    <h1 className="typo_header">
                        <span className="text_crop">
                        We use the power of brand to make big things happen for your 
                        <span className="home_splash--current_word">product</span>
                        </span>
                    </h1>
                </div>
                <div className="home_splash--cta"></div>
            </div>
        </div>
    </div>
);

export default HomeSplash;