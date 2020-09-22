"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scale = exports.rhythm = void 0;
require("./global.css");
var typography_1 = __importDefault(require("typography"));
var typography_theme_wordpress_2016_1 = __importDefault(require("typography-theme-wordpress-2016"));
typography_theme_wordpress_2016_1.default.overrideThemeStyles = function (_a) {
    var rhythm = _a.rhythm;
    return ({
        "a.gatsby-resp-image-link": {
            boxShadow: "none",
        },
        body: {
            background: "#333333",
            color: "#F2F2F2",
        },
        "h1, h2, h3": {
            fontFamily: ["Merriweather", "Georgia", "serif"].join(",") + " !important",
        },
        a: {
            color: "#75B5FF",
        },
        "a:hover": {
            transition: "1s filter linear",
            filter: "brightness(85%)",
        },
        "ul, ol": {
            marginLeft: 0,
        },
        li: {
            marginLeft: "30px",
        },
        blockquote: {
            color: "inherit",
            borderLeftColor: "inherit",
            opacity: "0.8",
            fontSize: "1.1rem",
        },
        pre: {
            border: "1px solid #666666",
            borderRadius: ".3em",
            marginBottom: rhythm(1) + " !important",
        },
        hr: {
            background: "#666666",
        },
        "td, th": {
            borderColor: "#666666",
        },
        strong: {
            fontWeight: 800,
        },
    });
};
delete typography_theme_wordpress_2016_1.default.googleFonts;
var typography = new typography_1.default(typography_theme_wordpress_2016_1.default);
// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
    typography.injectStyles();
}
exports.default = typography;
exports.rhythm = typography.rhythm;
exports.scale = typography.scale;
