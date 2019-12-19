import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from './footer';
import "./layout.css"
import 'typeface-montserrat';

const navigations = ['work', 'agency', 'contact'];

const Layout = ({ children, footerInfo }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="page-view">
        <div className="page-view-inner">
          <section className="container work-block">{children}</section>
          <Footer description={footerInfo} />
          <Header siteTitle={data.site.siteMetadata.title} navigations={navigations} />
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
