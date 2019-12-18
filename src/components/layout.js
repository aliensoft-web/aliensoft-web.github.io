import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import 'typeface-montserrat';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        },
        navigations
      }
    }
  `)

  return (
    <>
      <div className="page-view">
        <div className="page-view-inner">
          <section className="container work-block">{children}</section>
          <Header siteTitle={data.site.siteMetadata.title} navigations={data.site.navigations} />
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
