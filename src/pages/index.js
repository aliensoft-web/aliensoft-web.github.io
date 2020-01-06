import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeSplash from '../components/home-splash'
import BigFeatures from '../components/big-features'
import HomeInfo from '../components/home-info'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main>
      <div className="page_wrap">
        <HomeSplash />
        <BigFeatures />
        <HomeInfo />
      </div>
    </main>
  </Layout>
)

export default IndexPage
