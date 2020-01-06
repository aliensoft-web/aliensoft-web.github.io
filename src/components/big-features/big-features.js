import React from 'react';
import { Link } from 'gatsby';
import './big-features.css';
import lime from '../../images/lime.jpg';
import bode from '../../images/bode.jpg';
import cuvaison from '../../images/cuvaison.jpg';
import pae_luma from '../../images/pae_luma.jpg';
import carmel from '../../images/carmel.jpg';

const BigFeatures = () => (
    <>
        <div className="big_feature">
            <div className="container">
                <Link to="/work" className="base_link base_link-no_underline big_feature--link">
                    <div className="big_feature--inner">
                        <div className="big_feature--image">
                            <div className="big_feature--progress_reveal"></div>
                            <div className="big_feature--progress_text"></div>
                            <span className="base_link--wrap">
                                <div className="base_image">
                                    <img src={lime} alt="Lime" />
                                </div>
                            </span>
                        </div>
                        <div className="big_feature--content">
                            <div className="base_block big_feature--copy">
                                <h2 className="typo_header big_feature--title">
                                    <span className="text_crop">Sharing Economy Upstarts Unlock Life Worldwide</span>
                                </h2>
                                <p className="typo_paragraph">
                                    <span className="text_crop">
                                        <span className="typo_small">
                                            <span className="text_crop">Lime</span>
                                        </span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        <div className="big_feature">
            <div className="container">
                <Link to="/work" className="base_link base_link-no_underline big_feature--link">
                    <div className="big_feature--inner">
                        <div className="big_feature--image">
                            <div className="big_feature--progress_reveal"></div>
                            <div className="big_feature--progress_text"></div>
                            <span className="base_link--wrap">
                                <div className="base_image">
                                    <img src={bode} alt="Lime" />
                                </div>
                            </span>
                        </div>
                        <div className="big_feature--content">
                            <div className="base_block big_feature--copy">
                                <h2 className="typo_header big_feature--title">
                                    <span className="text_crop">A New Brand of Lodging, Far Beyond Hotels</span>
                                </h2>
                                <p className="typo_paragraph">
                                    <span className="text_crop">
                                        <span className="typo_small">
                                            <span className="text_crop">Bode</span>
                                        </span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        <div className="big_feature">
            <div className="container">
                <Link to="/work" className="base_link base_link-no_underline big_feature--link">
                    <div className="big_feature--inner">
                        <div className="big_feature--image">
                            <div className="big_feature--progress_reveal"></div>
                            <div className="big_feature--progress_text"></div>
                            <span className="base_link--wrap">
                                <div className="base_image">
                                    <img src={cuvaison} alt="Lime" />
                                </div>
                            </span>
                        </div>
                        <div className="big_feature--content">
                            <div className="base_block big_feature--copy">
                                <h2 className="typo_header big_feature--title">
                                    <span className="text_crop">The Brand. The Myth. Cuvaison.</span>
                                </h2>
                                <p className="typo_paragraph">
                                    <span className="text_crop">
                                        <span className="typo_small">
                                            <span className="text_crop">Cuvaison</span>
                                        </span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        <div className="big_feature">
            <div className="container">
                <Link to="/work" className="base_link base_link-no_underline big_feature--link">
                    <div className="big_feature--inner">
                        <div className="big_feature--image">
                            <div className="big_feature--progress_reveal"></div>
                            <div className="big_feature--progress_text"></div>
                            <span className="base_link--wrap">
                                <div className="base_image">
                                    <img src={pae_luma} alt="Lime" />
                                </div>
                            </span>
                        </div>
                        <div className="big_feature--content">
                            <div className="base_block big_feature--copy">
                                <h2 className="typo_header big_feature--title">
                                    <span className="text_crop">Two Groundbreaking Brands Visualize One Sustainable Mission</span>
                                </h2>
                                <p className="typo_paragraph">
                                    <span className="text_crop">
                                        <span className="typo_small">
                                            <span className="text_crop">PAE + Luma</span>
                                        </span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        <div className="big_feature">
            <div className="container">
                <Link to="/work" className="base_link base_link-no_underline big_feature--link">
                    <div className="big_feature--inner">
                        <div className="big_feature--image">
                            <div className="big_feature--progress_reveal"></div>
                            <div className="big_feature--progress_text"></div>
                            <span className="base_link--wrap">
                                <div className="base_image">
                                    <img src={carmel} alt="Lime" />
                                </div>
                            </span>
                        </div>
                        <div className="big_feature--content">
                            <div className="base_block big_feature--copy">
                                <h2 className="typo_header big_feature--title">
                                    <span className="text_crop">A Digital Home for Extraordinary Residence Brands</span>
                                </h2>
                                <p className="typo_paragraph">
                                    <span className="text_crop">
                                        <span className="typo_small">
                                            <span className="text_crop">Carmel Partners</span>
                                        </span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </>
);

export default BigFeatures;