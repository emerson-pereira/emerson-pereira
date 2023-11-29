import React, { FC } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

interface props {
  data: any
  pageContext: any
  location: any
}

const BlogPostTemplate: FC<props> = ({ data, location }) => {
  const post = data.markdownRemark
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
        <Link style={{ boxShadow: `none` }} to="/">
          ← Voltar
        </Link>
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
            marginTop: rhythm(2),
            marginBottom: rhythm(2),
          }}
        />

        <footer
          style={{
            marginTop: rhythm(1),
            marginBottom: rhythm(1),
          }}
        >
          <p style={{ marginBottom: rhythm(1) }}>
            <Link target="_blank" rel="noreferrer" to={editURL}>
              Editar no GitHub
            </Link>
          </p>
        </footer>
      </article>

      <p style={{ marginTop: rhythm(2), marginBottom: rhythm(2) }}>
        <Link style={{ boxShadow: `none` }} to="/">
          Emerson Pereira
        </Link>
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
