import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Home = ({ location }) => (
  <Layout location={location} title="Emerson Pereira">
    {/* eslint-disable */}
    <p>
      I work with web development since 2016, and I'm passionate about the web
      and the technologies around it.
    </p>

    <Link to="/about">
      <h4>🙂 More about me</h4>
    </Link>

    <Link to="/blog">
      <h4>📝 Articles</h4>
    </Link>
    <a href="mailto:emerson@emersonpereira.me">
      <h4>📫 emerson@emersonpereira.me</h4>
    </a>
  </Layout>
)

export default Home
