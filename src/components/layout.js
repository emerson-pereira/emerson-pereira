import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"

const LayoutContainer = styled.div`
  background: #333;
  color: #f2f2f2;
  height: 100vh;
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};

  & > div {
    margin-left: auto;
    margin-right: auto;
    max-width: ${rhythm(24)};
  }
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <LayoutContainer>
      <div>
        <header>{header}</header>
        <main>{children}</main>
        <footer></footer>
      </div>
    </LayoutContainer>
  )
}

export default Layout
