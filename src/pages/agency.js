import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import MainHeader from '../components/main-header';
import AgencyBlock from '../components/agency-block';
import Footer from '../components/footer';

const description = 'We are a digital product design agency';
const data = { title: "Let's talk about your product", des: "Shall we chat?", url: "/contact" }

const Agency = () => (
    <Layout>
        <SEO title="Agency" />
        <section className="container work-block no-margin">
            <MainHeader description={description} />
            <AgencyBlock />
        </section>
        <Footer data={data} />
    </Layout>
)

export default Agency;