import React, { FC } from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

interface props {
  data: any
  pageContext: any
  location: any
}

const BlogPostTemplate: FC<props> = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext
  const { ogimage } = post.frontmatter
  const ogImagePath = ogimage && ogimage.childImageSharp.fixed.src

  const editURL = `https://github.com/emerson-pereira/emerson-pereira/edit/master/content/blog/${
    data.markdownRemark.fileAbsolutePath.split("/blog/")[1]
  }`

  return (
    <Layout location={location} title={data.site.siteMetadata.author.name}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        lang="pt-BR"
        image={ogImagePath}
      />
      <p style={{ marginBottom: 40 }}>
        <Link to="/">← All posts</Link>
      </p>
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />

        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

        <div
          style={{
            background: `#4d4d4d`,
            borderRadius: `10px`,
            padding: rhythm(1),
            marginBottom: rhythm(1),
          }}
        >
          <p style={{ margin: 0 }}>
            Achou algum erro ou quer sugestionar uma mudança? <br />
            <a target="_blank" rel="noreferrer" href={editURL}>
              Edite esse post
            </a>
          </p>
        </div>

        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`${previous.fields.slug}`} rel="prev">
                {"‹"} {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`${next.fields.slug}`} rel="next">
                {next.frontmatter.title} {"›"}
              </Link>
            )}
          </li>
        </ul>
      </nav>

      <p style={{ marginTop: 40, marginBottom: 80 }}>
        <Link to="/">← All posts</Link>
      </p>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      fileAbsolutePath
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        ogimage {
          childImageSharp {
            fixed {
              src
            }
          }
        }
      }
    }
  }
`
