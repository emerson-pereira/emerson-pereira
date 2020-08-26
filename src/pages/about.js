import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { rhythm } from "../utils/typography"

const Home = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
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
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <Layout location={location} title="About me">
      <SEO />
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
        I'm Emerson pereira.
        <br />
        This is a bit about me. My carreer, skills and some fun facts.
      </p>

      <h4>
        <span role="img" aria-label="Suitcase">
          💼
        </span>{" "}
        Carreer
      </h4>

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

      <h4>
        <span role="img" aria-label="Books">
          📚
        </span>{" "}
        Skills
      </h4>

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

      <h4>
        <span role="img" aria-label="High voltage symbol">
          ⚡
        </span>{" "}
        Fun facts
      </h4>

      <ul>
        <li>I know how to juggle three balls</li>
        <li>I know how to wheelie a bycicle</li>
        <li>My favorite show is The office</li>
        <li>I used to teach English for Kids</li>
      </ul>

      <h4>
        <span role="img" aria-label="Mail box">
          📫
        </span>{" "}
        How to reach me
      </h4>

      <p>
        To contact me, please write to{" "}
        <a href="mailto:emerson@emersonpereira.me">emerson@emersonpereira.me</a>
        .
      </p>

      <p>
        To know more about my carrer and skills,{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/emerson-pereira-dev/"
        >
          connect with me on LinkedIn
        </a>
        .
      </p>

      <p>
        You can also{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/emerson-pereira/"
        >
          find me on GitHub
        </a>{" "}
        if you want to check what I've been up to, there.
      </p>
    </Layout>
  )
}

export default Home
