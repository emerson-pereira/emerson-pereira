import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { rhythm } from "../utils/typography"

const About = ({ location }) => {
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
            summary
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <Layout location={location} title="About">
      <SEO title="About" />
      <p style={{ marginBottom: 40 }}>
        <Link to="/">← Home</Link>
      </p>

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

      <h4>Skills</h4>

      <p>
        I have experience with Node.js and API development (REST and GraphQL),
        frontend frameworks, databases and Cloud.
      </p>

      <p>
        I'm a JavaScript coder. I have learned a lot of it over the years and
        continue to learn. I have been following up as the language evolves and,
        also, getting more familiar with its foundational principles.
      </p>

      <p>
        Right now, I'm learning about TypeScript, Next.js, Nest.js, Gatsby.js,
        and other hot tech in the world of JavaScript and web development.
      </p>

      <h4>Fun facts</h4>

      <ul>
        <li>I know how to juggle three balls</li>
        <li>I know how to wheelie a bycicle</li>
        <li>My favorite show is The office</li>
        <li>I used to teach English for Kids</li>
      </ul>
    </Layout>
  )
}

export default About
