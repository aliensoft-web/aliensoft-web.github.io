import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import MainHeader from '../components/main-header';
import Footer from '../components/footer';
import CategoryBlock from '../components/category-block';
import CategoryContent from '../components/category-content';

const description = 'App development agency';  
const data = { title: "Let's talk about your product", des: "Shall we chat?", url: "/contact" }

const Category = () => (
    <Layout>
        <SEO title="Category" />
        <div className="dark-theme">
            <section className="container work-block no-margin">
                <MainHeader description={description} />
                <div className="column">
                    <CategoryBlock />
                </div>
            </section>
        </div>
        <CategoryContent />
        <Footer data={data} />
    </Layout>
);

export default Category;