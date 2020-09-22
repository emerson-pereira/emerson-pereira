"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var BlogPostTemplate = function (_a) {
    var data = _a.data, pageContext = _a.pageContext, location = _a.location;
    var post = data.markdownRemark;
    var previous = pageContext.previous, next = pageContext.next;
    var ogimage = post.frontmatter.ogimage;
    var ogImagePath = ogimage && ogimage.childImageSharp.fixed.src;
    var editURL = "https://github.com/emerson-pereira/emerson-pereira/edit/master/content/blog/" + data.markdownRemark.fileAbsolutePath.split("/blog/")[1];
    return (react_1.default.createElement(layout_1.default, { location: location, title: "Blog" },
        react_1.default.createElement(seo_1.default, { title: post.frontmatter.title, description: post.frontmatter.description || post.excerpt, lang: "pt-BR", image: ogImagePath }),
        react_1.default.createElement("p", { style: { marginBottom: 40 } },
            react_1.default.createElement(gatsby_1.Link, { to: "/blog" }, "\u2190 All posts")),
        react_1.default.createElement("article", null,
            react_1.default.createElement("header", null,
                react_1.default.createElement("h1", { style: {
                        marginTop: typography_1.rhythm(1),
                        marginBottom: 0,
                    } }, post.frontmatter.title),
                react_1.default.createElement("p", { style: __assign(__assign({}, typography_1.scale(-1 / 5)), { display: "block", marginBottom: typography_1.rhythm(1) }) }, post.frontmatter.date)),
            react_1.default.createElement("section", { dangerouslySetInnerHTML: { __html: post.html } }),
            react_1.default.createElement("div", { style: {
                    background: "#4d4d4d",
                    borderRadius: "10px",
                    padding: typography_1.rhythm(1),
                    marginBottom: typography_1.rhythm(1),
                } },
                react_1.default.createElement("p", { style: { margin: 0 } },
                    "Achou algum erro ou quer sugestionar uma mudan\u00E7a? ",
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("a", { target: "_blank", rel: "noreferrer", href: editURL }, "Edite no GitHub"))),
            react_1.default.createElement("hr", { style: {
                    marginBottom: typography_1.rhythm(1),
                } }),
            react_1.default.createElement("footer", null,
                react_1.default.createElement(bio_1.default, null))),
        react_1.default.createElement("nav", null,
            react_1.default.createElement("ul", { style: {
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    listStyle: "none",
                    padding: 0,
                } },
                react_1.default.createElement("li", null, previous && (react_1.default.createElement(gatsby_1.Link, { to: "/blog" + previous.fields.slug, rel: "prev" },
                    "\u2190 ",
                    previous.frontmatter.title))),
                react_1.default.createElement("li", null, next && (react_1.default.createElement(gatsby_1.Link, { to: "/blog" + next.fields.slug, rel: "next" },
                    next.frontmatter.title,
                    " \u2192")))))));
};
exports.default = BlogPostTemplate;
exports.pageQuery = gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query BlogPostBySlug($slug: String!) {\n    site {\n      siteMetadata {\n        title\n      }\n    }\n    markdownRemark(fields: { slug: { eq: $slug } }) {\n      id\n      excerpt(pruneLength: 160)\n      fileAbsolutePath\n      html\n      frontmatter {\n        title\n        date(formatString: \"MMMM DD, YYYY\")\n        description\n        ogimage {\n          childImageSharp {\n            fixed {\n              src\n            }\n          }\n        }\n      }\n    }\n  }\n"], ["\n  query BlogPostBySlug($slug: String!) {\n    site {\n      siteMetadata {\n        title\n      }\n    }\n    markdownRemark(fields: { slug: { eq: $slug } }) {\n      id\n      excerpt(pruneLength: 160)\n      fileAbsolutePath\n      html\n      frontmatter {\n        title\n        date(formatString: \"MMMM DD, YYYY\")\n        description\n        ogimage {\n          childImageSharp {\n            fixed {\n              src\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
var templateObject_1;
