import React from 'react';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import './home-info.css';

const HomeInfo = () => (
    <div className="home_latest_news home_news">
        <div className="container">
            <div className="home_latest_news--inner">
                <Fade>
                <div className="home_latest_news--title">
                    <h2 className="typo_header typo_header-variant_4">
                        <span className="text_crop">Latest news</span>
                        <p className="typo_paragraph home_news--see_all">
                            <span className="text_crop">
                                <span className="base_link--wrap">
                                    <Link to="/news" className="base_link">See all</Link>
                                </span>
                            </span>
                        </p>
                    </h2>
                </div>
                <div className="home_latest_news--items">
                    <div className="base_block">
                        <h3 className="typo_header typo_header-variant_4">
                            <span className="text_crop">
                                <span className="base_link--wrap">
                                    <Link to="/news" className="base_link base_link-start_blank">Multi-Brand Digital: Building Systems, Not Just Sites</Link>
                                </span>
                            </span>
                        </h3>
                        <div className="typo_small">
                            <div className="text_crop">Posted in Insights</div>
                        </div>
                    </div>
                    <div className="base_block">
                        <h3 className="typo_header typo_header-variant_4">
                            <span className="text_crop">
                                <span className="base_link--wrap">
                                    <Link to="/news" className="base_link base_link-start_blank">Outsmart B2B Brands with P2P(eople) Thinking</Link>
                                </span>
                            </span>
                        </h3>
                        <div className="typo_small">
                            <div className="text_crop">Posted in Insights</div>
                        </div>
                    </div>
                    <div className="base_block">
                        <h3 className="typo_header typo_header-variant_4">
                            <span className="text_crop">
                                <span className="base_link--wrap">
                                    <Link to="/news" className="base_link base_link-start_blank">What Making Websites Taught Us About Hospitality Branding</Link>
                                </span>
                            </span>
                        </h3>
                        <div className="typo_small">
                            <div className="text_crop">Posted in Insights</div>
                        </div>
                    </div>
                </div>
            </Fade>
            </div>
        </div>
    </div>
);

export default HomeInfo;