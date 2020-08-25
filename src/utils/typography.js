import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => ({
  "a.gatsby-resp-image-link": {
    boxShadow: `none`,
  },
  body: {
    background: `#333333`,
    color: `#F2F2F2`,
  },
  a: {
    color: `#75B5FF`,
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
    marginBottom: `1.75rem !important`,
  },
  hr: {
    background: "#666666",
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
