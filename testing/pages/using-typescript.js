"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
// If you don't want to use TypeScript you can delete this file!
var react_1 = __importDefault(require("react"));
var gatsby_1 = require("gatsby");
var layout_1 = __importDefault(require("../components/layout"));
var seo_1 = __importDefault(require("../components/seo"));
var UsingTypescript = function (_a) {
    var data = _a.data, path = _a.path, location = _a.location;
    return (react_1.default.createElement(layout_1.default, { title: "Using TypeScript", location: location },
        react_1.default.createElement(seo_1.default, { title: "Using TypeScript" }),
        react_1.default.createElement("h1", null, "Gatsby supports TypeScript by default!"),
        react_1.default.createElement("p", null,
            "This means that you can create and write ",
            react_1.default.createElement("em", null, ".ts/.tsx"),
            " files for your pages, components etc. Please note that the ",
            react_1.default.createElement("em", null, "gatsby-*.js"),
            " files (like gatsby-node.js) currently don't support TypeScript yet."),
        react_1.default.createElement("p", null,
            "For type checking you'll want to install ",
            react_1.default.createElement("em", null, "typescript"),
            " via npm and run ",
            react_1.default.createElement("em", null, "tsc --init"),
            " to create a ",
            react_1.default.createElement("em", null, ".tsconfig"),
            " file."),
        react_1.default.createElement("p", null,
            "You're currently on the page \"",
            path,
            "\" which was built on",
            " ",
            data.site.buildTime,
            "."),
        react_1.default.createElement("p", null,
            "To learn more, head over to our",
            " ",
            react_1.default.createElement("a", { href: "https://www.gatsbyjs.org/docs/typescript/" }, "documentation about TypeScript"),
            "."),
        react_1.default.createElement(gatsby_1.Link, { to: "/" }, "Go back to the homepage")));
};
exports.default = UsingTypescript;
exports.query = gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    site {\n      buildTime(formatString: \"YYYY-MM-DD hh:mm a z\")\n    }\n  }\n"], ["\n  {\n    site {\n      buildTime(formatString: \"YYYY-MM-DD hh:mm a z\")\n    }\n  }\n"])));
var templateObject_1;
