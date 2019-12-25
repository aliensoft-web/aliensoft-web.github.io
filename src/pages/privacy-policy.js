import React from 'react'
import Layout from '../components/layout';
import SEO from '../components/seo';
import MainHeader from '../components/main-header';
import PrivacyBlock from '../components/privacy-block';

const description = 'Privacy Policy';

const PrivacyPolicy = () => (
    <Layout>
        <SEO title="Privacy Policy" />
        <section className="container work-block no-margin">
            <MainHeader description={description} />
            <PrivacyBlock />
        </section>
    </Layout>
);

export default PrivacyPolicy;