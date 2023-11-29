import "./global.css"

import Typography from "typography"
import Doelger from "typography-theme-kirkham"

const primaryColor =
  "hsl(" +
  360 * Math.random() +
  "," +
  (25 + 70 * Math.random()) +
  "%," +
  (85 + 10 * Math.random()) +
  "%)"
const textColor = "rgba(255 255 255 / 0.8)"

Doelger.overrideThemeStyles = ({ rhythm }: { rhythm: Function }) => ({
  a: {
    textShadow: "none",
    color: primaryColor,
    backgroundImage: "none",
  },
  "a:hover": {
    transition: `1s filter linear`,
    filter: `brightness(85%)`,
  },
  "li, p": {
    fontFamily: `${["Georgia", "Monaco", "Andale Mono", "Ubuntu Mono", "monospace"].join(",")} !important`,
    color: textColor
  },
  body: {
    background: "rgba(0 0 0 / .9)",
    color: textColor,
  },
  "header a": {
    textDecoration: 'none',
  },
  "h1, h2, h3": {
    fontFamily: `${["Playfair Display", "Times News Roman", "Serif"].join(",")} !important`,
    color: textColor,
    border: 0,
  },
  "ul, ol": {
    marginLeft: 0,
  },
  li: {
    marginLeft: `30px`,
  },
  blockquote: {
    color: `inherit`,
    borderLeftColor: primaryColor,
    opacity: `0.8`,
    fontSize: `1.1rem`,
  },
  pre: {
    border: `1px solid ${primaryColor}`,
    borderRadius: `.3em`,
    marginBottom: `${rhythm(1)} !important`,
  },
  hr: {
    background: "rgba(255 255 255 / 0.25)",
  },
  "td, th": {
    borderColor: primaryColor,
  },
  strong: {
    fontWeight: 800,
  },
})

const typography = new Typography(Doelger)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
