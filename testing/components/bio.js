"use strict";
/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
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
var gatsby_1 = require("gatsby");
var gatsby_image_1 = __importDefault(require("gatsby-image"));
var typography_1 = require("../utils/typography");
var Bio = function () {
    var data = gatsby_1.useStaticQuery(gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query BioQuery {\n      avatar: file(absolutePath: { regex: \"/avatar.jpg/\" }) {\n        childImageSharp {\n          fixed(width: 50, height: 50) {\n            ...GatsbyImageSharpFixed\n          }\n        }\n      }\n      site {\n        siteMetadata {\n          author {\n            name\n            summary\n          }\n        }\n      }\n    }\n  "], ["\n    query BioQuery {\n      avatar: file(absolutePath: { regex: \"/avatar.jpg/\" }) {\n        childImageSharp {\n          fixed(width: 50, height: 50) {\n            ...GatsbyImageSharpFixed\n          }\n        }\n      }\n      site {\n        siteMetadata {\n          author {\n            name\n            summary\n          }\n        }\n      }\n    }\n  "]))));
    var author = data.site.siteMetadata.author;
    return (react_1.default.createElement("div", { style: {
            display: "flex",
            marginBottom: typography_1.rhythm(2.5),
        } },
        react_1.default.createElement(gatsby_image_1.default, { fixed: data.avatar.childImageSharp.fixed, alt: author.name, style: {
                marginRight: typography_1.rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: "100%",
            }, imgStyle: {
                borderRadius: "50%",
            } }),
        react_1.default.createElement("p", { style: { margin: 0 } },
            "Escrito por ",
            react_1.default.createElement("strong", null, author.name),
            react_1.default.createElement("br", null),
            author.summary)));
};
exports.default = Bio;
var templateObject_1;
