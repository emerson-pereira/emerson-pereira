import React, { FC } from "react"
import { graphql, Link } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex: FC<{ data: any; location: any }> = ({ data, location }) => {
  const posts: { node: any }[] = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={data.site.siteMetadata.author.name}>
      <SEO title="Blog" lang="pt-BR" />
      <Bio />
      {/* <Link
        style={{
          boxShadow: `none`,
          margin: 0,
          position: `absolute`,
          top: rhythm(1),
          right: rhythm(1),
        }}
        to="/rss.xml"
      >
        <small>rss</small>
      </Link> */}
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={`${node.fields.slug}`}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 1000) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
