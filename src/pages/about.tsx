import React, { FC } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { rhythm } from "../utils/typography"

const About: FC<{ location: any }> = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/avatar.jpg/" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <Layout location={location} title={author.name}>
      <SEO title="About" />

      <div style={{ textAlign: `center`, margin: rhythm(1) }}>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          style={{
            margin: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      </div>

      <p>
        Hi there{" "}
        <span role="img" aria-label="Waving hand">
          👋
        </span>
        <br />
        I'm Emerson Pereira.
        <br />
        This is a bit about me. My carreer, skills and some fun facts.
      </p>

      <h4>Carreer</h4>

      <p>
        I started at IBM back in 2016 where I first started working with Web
        pages HTML/CSS/JavaScript, moved on to an agile team of web development
        where I took care of IBM Watson Customer Engagement brand as the main
        developer, after that, I joined the Applications team as application
        full-stack developer in 2018 where I worked with front, backend, Vue.js,
        React, Node, Cloud, and DB having developed a chatbot for Corinthians
        soccer team.
      </p>

      <p>
        Then in 2019 I joined the Carbon Design System team in IBM where I
        worked with an open source Project called Carbon For IBM.com working
        with React.js and other frameworks in an agile team practicing
        code-review, tests and continuous integration.
      </p>

      
    <p>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/emerson-pereira-dev/"
      >
        LinkedIn
      </a>
    </p>
    </Layout>
  )
}

export default About
