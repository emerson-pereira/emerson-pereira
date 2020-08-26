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
      <p>About me</p>
    </Link>

    <Link to="/blog">
      <p>Blog (in portuguese)</p>
    </Link>
  </Layout>
)

export default Home
