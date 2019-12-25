import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainHeader from "../components/main-header"

const description = 'Home Page';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <section className="container work-block">
        <MainHeader description={description} />
      </section>
  </Layout>
)

export default IndexPage
