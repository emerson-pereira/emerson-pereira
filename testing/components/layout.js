"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var gatsby_1 = require("gatsby");
var typography_1 = require("../utils/typography");
var Layout = function (_a) {
    var location = _a.location, title = _a.title, children = _a.children;
    var rootPath = __PATH_PREFIX__ + "/";
    var header;
    if (location.pathname === rootPath) {
        header = (react_1.default.createElement("h1", { style: {
                marginBottom: typography_1.rhythm(1.5),
                marginTop: 0,
            } },
            react_1.default.createElement(gatsby_1.Link, { style: {
                    boxShadow: "none",
                    color: "inherit",
                }, to: "/" }, title)));
    }
    else {
        header = (react_1.default.createElement("h3", { style: {
                fontFamily: "Montserrat, sans-serif",
                marginTop: 0,
            } },
            react_1.default.createElement(gatsby_1.Link, { style: {
                    boxShadow: "none",
                    color: "inherit",
                }, to: "/" }, title)));
    }
    return (react_1.default.createElement("div", { style: {
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: typography_1.rhythm(24),
            padding: typography_1.rhythm(1.5) + " " + typography_1.rhythm(3 / 4),
        } },
        react_1.default.createElement("header", null, header),
        react_1.default.createElement("main", null, children)));
};
exports.default = Layout;
