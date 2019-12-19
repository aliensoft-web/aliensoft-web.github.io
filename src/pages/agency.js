import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import MainHeader from '../components/main-header';
import AgencyBlock from '../components/agency-block';

const description = 'We are a digital product design agency';
const footerInfo = { title: "Let's talk about your product", des: "Shall we chat?", url: "/contact" }

const Agency = () => (
    <Layout footerInfo={footerInfo}>
        <SEO title="Agency" />
        <MainHeader description={description} />
        <AgencyBlock />
    </Layout>
)

export default Agency;