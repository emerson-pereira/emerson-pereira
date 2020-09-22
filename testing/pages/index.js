"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var gatsby_1 = require("gatsby");
var layout_1 = __importDefault(require("../components/layout"));
var seo_1 = __importDefault(require("../components/seo"));
var Home = function (_a) {
    var location = _a.location;
    return (react_1.default.createElement(layout_1.default, { location: location, title: "Emerson Pereira" },
        react_1.default.createElement(seo_1.default, { title: "" }),
        react_1.default.createElement("p", null, "I work with web development since 2016, and I'm passionate about the web and the technologies around it."),
        react_1.default.createElement("p", null,
            react_1.default.createElement(gatsby_1.Link, { to: "/about" }, "About")),
        react_1.default.createElement("p", null,
            react_1.default.createElement(gatsby_1.Link, { to: "/blog" }, "Blog")),
        react_1.default.createElement("h4", null, "Contact"),
        react_1.default.createElement("p", null,
            react_1.default.createElement("a", { href: "mailto:emerson@emersonpereira.me" }, "Email")),
        react_1.default.createElement("p", null,
            react_1.default.createElement("a", { target: "_blank", rel: "noreferrer", href: "https://github.com/emerson-pereira/" }, "GitHub")),
        react_1.default.createElement("p", null,
            react_1.default.createElement("a", { target: "_blank", rel: "noreferrer", href: "https://www.linkedin.com/in/emerson-pereira-dev/" }, "LinkedIn"))));
};
exports.default = Home;
