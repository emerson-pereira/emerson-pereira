"use strict";
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var react_helmet_1 = require("react-helmet");
var gatsby_1 = require("gatsby");
var thumb_jpg_1 = __importDefault(require("../../content/assets/thumb.jpg"));
var SEO = function (_a) {
    var description = _a.description, lang = _a.lang, meta = _a.meta, title = _a.title, image = _a.image;
    if (typeof meta === "undefined") {
        meta = [];
    }
    var site = gatsby_1.useStaticQuery(gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      query {\n        site {\n          siteMetadata {\n            title\n            description\n            author {\n              summary\n            }\n            siteUrl\n          }\n        }\n      }\n    "], ["\n      query {\n        site {\n          siteMetadata {\n            title\n            description\n            author {\n              summary\n            }\n            siteUrl\n          }\n        }\n      }\n    "])))).site;
    var metaDescription = description || site.siteMetadata.description;
    var defaultTitle = site.siteMetadata.title + " - " + site.siteMetadata.author.summary;
    var ogTitle = title ? title + " - " + site.siteMetadata.title : defaultTitle;
    var ogImage = site.siteMetadata.siteUrl + (image || thumb_jpg_1.default);
    return (react_1.default.createElement(react_helmet_1.Helmet, { htmlAttributes: {
            lang: lang,
        }, title: title, defaultTitle: defaultTitle, titleTemplate: "%s - " + site.siteMetadata.title, meta: [
            {
                name: "description",
                content: metaDescription,
            },
            {
                property: "og:title",
                content: ogTitle,
            },
            {
                property: "og:description",
                content: metaDescription,
            },
            {
                property: "og:type",
                content: "website",
            },
            {
                property: "og:url",
                content: site.siteMetadata.siteUrl,
            },
            {
                property: "og:image",
                content: ogImage,
            },
            {
                name: "twitter:card",
                content: "summary",
            },
            {
                name: "twitter:url",
                content: site.siteMetadata.siteUrl,
            },
            {
                name: "twitter:title",
                content: ogTitle,
            },
            {
                name: "twitter:description",
                content: metaDescription,
            },
            {
                name: "twitter:image",
                content: ogImage,
            },
        ].concat(meta), link: [
            {
                rel: "alternate",
                type: "application/rss+xml",
                title: "Emerson Pereira's personal blog RSS Feed",
                href: "./rss.xml",
            },
        ] }));
};
SEO.defaultProps = {
    lang: "en",
    meta: [],
    description: "",
};
SEO.propTypes = {
    description: prop_types_1.default.string,
    lang: prop_types_1.default.string,
    meta: prop_types_1.default.array,
    title: prop_types_1.default.string.isRequired,
    image: prop_types_1.default.string,
};
exports.default = SEO;
var templateObject_1;
