import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Home = ({ location }) => (
  <Layout location={location} title="Emerson Pereira">
    <SEO title="" />
    <p>
      I work with web development since 2016, and I'm passionate about the web
      and the technologies around it.
    </p>

    <p>
      <Link to="/about">About me</Link>
    </p>
    <p>
      <Link to="/blog">Blog</Link>
    </p>

    {/* <p>
      <Link to="/contact">Contact</Link>
    </p> */}

    <h4>Reach me</h4>

    <p>
      <a href="mailto:emerson@emersonpereira.me">Email</a>
    </p>

    <p>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/emerson-pereira/"
      >
        GitHub
      </a>
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

export default Home
