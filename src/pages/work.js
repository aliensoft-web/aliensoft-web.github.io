import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import MainHeader from '../components/main-header';
import Listboard from '../components/listboard';
import Footer from '../components/footer';

const description = 'We take digital experiences to the next level';
const data = { title: "Agency", des: "Learn more about AlienSoft", url: "/agency" }

const Work = () => (
    <Layout>
        <SEO title="Work" />
        <section className="container work-block">
            <MainHeader description={description} />
            <Listboard />
        </section>
        <Footer data={data} />
    </Layout>
)

export default Work;