import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Home = ({ location }) => (
  <Layout location={location} title="Emerson Pereira">
    <p>
      Hi there,
      <br />
      I'm Emerson Pereira and I'm a Web Developer.
    </p>

    <h4>🙂 About Me</h4>
    <p>
      I work with web development since 2016, and I'm passionate about the web
      and the technologies around it.
    </p>
    <Link to="/about">More about me</Link>

    <h4>📝 Articles</h4>
    <p>
      I, sometimes, write about web development topics (mainly in portuguese).
      To checkout my articles, go to the.
    </p>
    <Link to="/blog">See my articles</Link>

    <h4>📫 How to reach me</h4>
    <p>
      To contact me, please write to{" "}
      <a href="mailto:emerson@emersonpereira.me">emerson@emersonpereira.me</a>.
    </p>
  </Layout>
)

export default Home
