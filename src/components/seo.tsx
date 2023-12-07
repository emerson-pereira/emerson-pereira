/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import defaultOpenGraphImage from "../../content/assets/avatar.png"

interface props {
  description?: string
  lang?: string
  meta?: any[]
  title: string
  image?: string
}

const SEO: FC<props> = ({ description, lang, meta, title, image }) => {
  if (typeof meta === "undefined") {
    meta = []
  }
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author {
            summary
          }
          siteUrl
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = `${site.siteMetadata.title} - ${site.siteMetadata.author.summary}`
  const ogTitle = title ? `${title} - ${site.siteMetadata.title}` : defaultTitle
  const ogImage = site.siteMetadata.siteUrl + (image || defaultOpenGraphImage)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={`%s - ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: ogTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:url`,
          content: site.siteMetadata.siteUrl,
        },
        {
          name: `twitter:title`,
          content: ogTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: ogImage,
        },
      ].concat(meta)}
      link={[
        {
          rel: "alternate",
          type: "application/rss+xml",
          title: "Emerson Pereira's personal blog RSS Feed",
          href: "./rss.xml",
        },
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
}

export default SEO
