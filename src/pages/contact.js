import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import MainHeader from '../components/main-header';
import ContactForm from '../components/contact-form';

const description = 'Become a client';

const Contact = () => (
    <Layout>
        <SEO title="Contact" />
        <section className="container work-block no-margin">
            <MainHeader description={description} />
            <ContactForm />
        </section>
    </Layout>
);

export default Contact;