import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import MainHeader from '../components/main-header';
import Footer from '../components/footer';
import ProjectBlock from '../components/project-block';
import Fade from 'react-reveal/Fade';

const description = 'Improving self-service by 30%';
const data = { title: "Agency", des: "Learn more about AlienSoft", url: "/agency" }

const Project = () => (
    <Layout>
        <SEO title="Project" />
        <div className="dark-theme bg-project">
            <section className="container work-block no-margin">
                <MainHeader description={description} />
                <div className="column">
                    <Fade bottom>
                    <p className="description">Turo is a peer-to-peer carsharing company based in San Francisco. It has 4 million registered users and 170,000 owned cars available for rental. The company allows private car owners to rent out their vehicles via a web and mobile interface. Turo reached out to us to help redesign their customer support experience. This offered us a unique opportunity to define the look and feel of a 5-star, custom branded support experience.</p>
                    </Fade>
                </div>
            </section>
        </div>
        <ProjectBlock />
        <Footer data={data} />
    </Layout>
);

export default Project;