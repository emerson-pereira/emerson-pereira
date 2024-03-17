/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginTop: rhythm(1),
        marginBottom: rhythm(1),
      }}
    >
      <p style={{ margin: 0 }}>
        Artigos sobre desenvolvimento web.
        <br />
        <Link
          target="_blank"
          rel="noreferrer"
          to="https://www.linkedin.com/in/emerson-pereira-dev/"
        >
          LinkedIn
        </Link>{" "}
        •{" "}
        <Link
          target="_blank"
          rel="noreferrer"
          to="https://github.com/emerson-pereira/"
        >
          GitHub
        </Link>{" "}
      </p>
    </div>
  )
}

export default Bio
