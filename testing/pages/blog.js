"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageQuery = void 0;
var react_1 = __importDefault(require("react"));
var gatsby_1 = require("gatsby");
var bio_1 = __importDefault(require("../components/bio"));
var layout_1 = __importDefault(require("../components/layout"));
var seo_1 = __importDefault(require("../components/seo"));
var typography_1 = require("../utils/typography");
var BlogIndex = function (_a) {
    var data = _a.data, location = _a.location;
    var posts = data.allMarkdownRemark.edges;
    return (react_1.default.createElement(layout_1.default, { location: location, title: "Blog" },
        react_1.default.createElement(seo_1.default, { title: "Blog", lang: "pt-BR" }),
        react_1.default.createElement("p", { style: { marginBottom: 40 } },
            react_1.default.createElement(gatsby_1.Link, { to: "/" }, "\u2190 Home")),
        react_1.default.createElement(bio_1.default, null),
        posts.map(function (_a) {
            var node = _a.node;
            var title = node.frontmatter.title || node.fields.slug;
            return (react_1.default.createElement("article", { key: node.fields.slug },
                react_1.default.createElement("header", null,
                    react_1.default.createElement("h3", { style: {
                            marginBottom: typography_1.rhythm(1 / 4),
                        } },
                        react_1.default.createElement(gatsby_1.Link, { style: { boxShadow: "none" }, to: "/blog" + node.fields.slug }, title)),
                    react_1.default.createElement("small", null, node.frontmatter.date)),
                react_1.default.createElement("section", null,
                    react_1.default.createElement("p", { dangerouslySetInnerHTML: {
                            __html: node.frontmatter.description || node.excerpt,
                        } }))));
        })));
};
exports.default = BlogIndex;
exports.pageQuery = gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query {\n    site {\n      siteMetadata {\n        title\n      }\n    }\n    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {\n      edges {\n        node {\n          excerpt\n          fields {\n            slug\n          }\n          frontmatter {\n            date(formatString: \"MMMM DD, YYYY\")\n            title\n            description\n          }\n        }\n      }\n    }\n  }\n"], ["\n  query {\n    site {\n      siteMetadata {\n        title\n      }\n    }\n    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {\n      edges {\n        node {\n          excerpt\n          fields {\n            slug\n          }\n          frontmatter {\n            date(formatString: \"MMMM DD, YYYY\")\n            title\n            description\n          }\n        }\n      }\n    }\n  }\n"])));
var templateObject_1;
