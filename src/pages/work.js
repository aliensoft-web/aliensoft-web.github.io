import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import MainHeader from '../components/main-header';
import Listboard from '../components/listboard';

const description = 'We take digital experiences to the next level';
const footerInfo = { title: "Agency", des: "Learn more about AlienSoft", url: "/agency" }

const Work = () => (
    <Layout footerInfo={footerInfo}>
        <SEO title="Work" />
        <MainHeader description={description} />
        <Listboard />
    </Layout>
)

export default Work;