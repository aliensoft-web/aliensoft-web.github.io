import React from 'react';
import { Link } from 'gatsby';
import './footer.css';

const Footer = () => (
    <div className="page_wrap--footer">
        <footer className="site_footer">
            <div className="container site_footer--inner site_footer-revealed">
                <div className="site_footer--tagline_wrap">
                    <div className="site_footer--tagline_inner">
                        <h3 className="site_footer--tagline_copy">
                            <span className="text-crop">We’d rather overdo it than overthink it.</span>
                        </h3>
                        <span className="base_link--wrap site_footer--tagline_link">
                            <Link to="/about" className="base_link">How We Do</Link>
                        </span>
                    </div>
                </div>
                <div className="footer_extras">
                    <div className="footer_extras--legal">
                        <span className="typo_small"><span className="text_crop">© 2019 RELEVENT</span></span>
                    </div>
                    <div className="footer_extras--aux_nav">
                        <ul className="aux_nav">
                            <li><span className="text_crop"><span className="base_link--wrap"><a href="/about" className="base_link base_link-start_blank">Client Login</a></span></span></li>
                            <li><span className="text_crop"><span className="base_link--wrap"><a href="/about" className="base_link base_link-start_blank">Shop</a></span></span></li>
                            <li><span className="text_crop"><span className="base_link--wrap"><a href="/about" className="base_link base_link-start_blank">Sitemap</a></span></span></li>
                            <li><span className="text_crop"><span className="base_link--wrap"><a href="/about" className="base_link base_link-start_blank">Newsletter</a></span></span></li>
                        </ul>
                    </div>
                    <div className="footer_extras--social">
                        <ul className="social_links">
                            <li><span className="text_crop"><span className="base_link--wrap"><a href="/socials" className="base_link base_link-start_blank">GitHub</a></span></span></li>
                            <li><span className="text_crop"><span className="base_link--wrap"><a href="/socials" className="base_link base_link-start_blank">Instagram</a></span></span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="site_footer--end"></div>
        </footer>
    </div>
);

export default Footer;