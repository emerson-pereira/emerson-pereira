"use strict";
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
var layout_1 = __importDefault(require("../components/layout"));
var seo_1 = __importDefault(require("../components/seo"));
var typography_1 = require("../utils/typography");
var About = function (_a) {
    var location = _a.location;
    var data = gatsby_1.useStaticQuery(gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query {\n      avatar: file(absolutePath: { regex: \"/avatar.jpg/\" }) {\n        childImageSharp {\n          fixed(width: 250, height: 250) {\n            ...GatsbyImageSharpFixed\n          }\n        }\n      }\n      site {\n        siteMetadata {\n          author {\n            name\n          }\n        }\n      }\n    }\n  "], ["\n    query {\n      avatar: file(absolutePath: { regex: \"/avatar.jpg/\" }) {\n        childImageSharp {\n          fixed(width: 250, height: 250) {\n            ...GatsbyImageSharpFixed\n          }\n        }\n      }\n      site {\n        siteMetadata {\n          author {\n            name\n          }\n        }\n      }\n    }\n  "]))));
    var author = data.site.siteMetadata.author;
    return (react_1.default.createElement(layout_1.default, { location: location, title: "About" },
        react_1.default.createElement(seo_1.default, { title: "About" }),
        react_1.default.createElement("p", { style: { marginBottom: 40 } },
            react_1.default.createElement(gatsby_1.Link, { to: "/" }, "\u2190 Home")),
        react_1.default.createElement("div", { style: { textAlign: "center", margin: typography_1.rhythm(1) } },
            react_1.default.createElement(gatsby_image_1.default, { fixed: data.avatar.childImageSharp.fixed, alt: author.name, style: {
                    margin: 0,
                    minWidth: 50,
                    borderRadius: "100%",
                }, imgStyle: {
                    borderRadius: "50%",
                } })),
        react_1.default.createElement("p", null,
            "Hi there",
            " ",
            react_1.default.createElement("span", { role: "img", "aria-label": "Waving hand" }, "\uD83D\uDC4B"),
            react_1.default.createElement("br", null),
            "I'm Emerson Pereira.",
            react_1.default.createElement("br", null),
            "This is a bit about me. My carreer, skills and some fun facts."),
        react_1.default.createElement("h4", null, "Carreer"),
        react_1.default.createElement("p", null, "I started at IBM back in 2016 where I first started working with Web pages HTML/CSS/JavaScript, moved on to an agile team of web development where I took care of IBM Watson Customer Engagement brand as the main developer, after that, I joined the Applications team as application full-stack developer in 2018 where I worked with front, backend, Vue.js, React, Node, Cloud, and DB having developed a chatbot for Corinthians soccer team."),
        react_1.default.createElement("p", null, "Then in 2019 I joined the Carbon Design System team in IBM where I worked with an open source Project called Carbon For IBM.com working with React.js and other frameworks in an agile team practicing code-review, tests and continuous integration."),
        react_1.default.createElement("h4", null, "Skills"),
        react_1.default.createElement("p", null, "I have experience with Node.js and API development (REST and GraphQL), frontend frameworks, databases and Cloud."),
        react_1.default.createElement("p", null, "I'm a JavaScript coder. I have learned a lot of it over the years and continue to learn. I have been following up as the language evolves and, also, getting more familiar with its foundational principles."),
        react_1.default.createElement("p", null, "Right now, I'm learning about TypeScript, Next.js, Nest.js, Gatsby.js, and other hot tech in the world of JavaScript and web development."),
        react_1.default.createElement("h4", null, "Fun facts"),
        react_1.default.createElement("ul", null,
            react_1.default.createElement("li", null, "I know how to juggle three balls"),
            react_1.default.createElement("li", null, "I know how to wheelie a bicycle"),
            react_1.default.createElement("li", null, "My favorite show is The office"),
            react_1.default.createElement("li", null, "I used to teach English for Kids"))));
};
exports.default = About;
var templateObject_1;
