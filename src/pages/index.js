import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Home = ({ location }) => (
  <Layout location={location} title="Emerson Pereira">
    <SEO title="Emerson Pereira - Web Developer" />
    <p>
      I work with web development since 2016, and I'm passionate about the web
      and the technologies around it.
    </p>

    <Link to="/about">
      <h4>
        <span role="img" aria-label="Smiley face">
          🙂
        </span>{" "}
        About me
      </h4>
    </Link>

    <Link to="/blog">
      <h4>
        <span role="img" aria-label="Memo note">
          📝
        </span>{" "}
        Blog (In portuguese)
      </h4>
    </Link>
    <a href="mailto:emerson@emersonpereira.me">
      <h4>
        <span role="img" aria-label="Mail box">
          📫
        </span>{" "}
        emerson@emersonpereira.me
      </h4>
    </a>
  </Layout>
)

export default Home
