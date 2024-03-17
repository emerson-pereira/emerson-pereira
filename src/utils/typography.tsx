import "./global.css"

import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = ({ rhythm }: { rhythm: Function }) => ({
  "a.gatsby-resp-image-link": {
    boxShadow: `none`,
  },
  body: {
    background: `radial-gradient(circle, rgba(51,8,108,1) 0%, rgba(8,20,39,1) 100%)`,
    color: `#F2F2F2`,
  },
  "h1, h2, h3": {
    fontFamily: `${["Merriweather", "Georgia", "serif"].join(",")} !important`,
  },
  a: {
    color: `#99ccff`,
  },
  "a:hover": {
    transition: `1s filter linear`,
    filter: `brightness(85%)`,
  },
  "ul, ol": {
    marginLeft: 0,
  },
  li: {
    marginLeft: `30px`,
  },
  blockquote: {
    color: `inherit`,
    borderLeftColor: `inherit`,
    opacity: `0.8`,
    fontSize: `1.1rem`,
  },
  pre: {
    border: `1px solid #666666`,
    borderRadius: `.3em`,
    marginBottom: `${rhythm(1)} !important`,
  },
  hr: {
    background: `rgba(255 255 255 / 0.33)`,
  },
  "td, th": {
    borderColor: `#666666`,
  },
  strong: {
    fontWeight: 800,
  },
})

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
