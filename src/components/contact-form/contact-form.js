import React from 'react';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import './contact-form.css';

const ContactForm = () => (
    <form className="column form-column">
        <Fade bottom>
        <p>Our clients get the best results when they have our team dedicated to their business for extended periods of time. This is why we are looking for ongoing collaboration where our professionals are like your team members who just happen to be remote. Ready to move forward?</p>
        <div className="form-group">
            <label htmlFor="first-name" className="input">
                <input type="text" id="first-name" name="first_name" placeholder="First name" required />
                <span>First name</span>
            </label>
            <label htmlFor="last-name" className="input">
                <input type="text" id="last-name" name="last_name" placeholder="Last name" required />
                <span>Last name</span>
            </label>
            <label htmlFor="form-email" className="input">
                <input type="email" id="form-email" name="email" placeholder="email@company.com" required />
                <span>Email</span>
                <p className="input-caption">Make sure you use your company email address.</p>
            </label>
        </div>
        <div className="how-find-us-block">
            <label htmlFor="how-find-us" className="input">
                <input type="text" id="how-find-us" name="how_find" placeholder="How did you find AlienSoft" />
                <span>How did you find AlienSoft</span>
            </label>
        </div>
        <input type="hidden" name="fuid" />
        <p className="form-info">
            By filling in the form, you agree to our
            <Link to="/privacy-policy" target="_blank"> Privacy Policy, </Link>
            including our cookie use.
        </p>
        <button className="submit-form button" disabled>
            <span className="default-state">Get in Touch</span>
        </button>
        <p className="form-footer">
            <a href="mailto:oripovd1@gmail.com" target="_self">Press Inquiries</a>
            <a href="mailto:oripovd1@gmail.com" target="_self">Join AlienSoft</a>
        </p>
        </Fade>
    </form>
);

export default ContactForm;