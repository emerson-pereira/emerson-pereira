import React, { FC } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Home: FC<{ location: any }> = ({ location }) => (
  <Layout location={location} title="Emerson Pereira">
    <SEO title="" />
    <p>
      I work with web development since 2016, and I'm passionate about the web
      and the technologies around it.
    </p>

    <p>
      <Link to="/about">About</Link>
    </p>
    <p>
      <Link to="/blog">
        Blog <abbr title="brazilian portuguese">(pt-br)</abbr>
      </Link>
    </p>

    <h2>Contact</h2>

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
