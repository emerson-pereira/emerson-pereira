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
var layout_1 = __importDefault(require("../components/layout"));
var seo_1 = __importDefault(require("../components/seo"));
var NotFoundPage = function (_a) {
    var data = _a.data, location = _a.location;
    var siteTitle = data.site.siteMetadata.title;
    return (react_1.default.createElement(layout_1.default, { location: location, title: siteTitle },
        react_1.default.createElement(seo_1.default, { title: "404: Not Found" }),
        react_1.default.createElement("h1", null, "Not Found"),
        react_1.default.createElement("p", null, "You just hit a route that doesn't exist... the sadness.")));
};
exports.default = NotFoundPage;
exports.pageQuery = gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query {\n    site {\n      siteMetadata {\n        title\n      }\n    }\n  }\n"], ["\n  query {\n    site {\n      siteMetadata {\n        title\n      }\n    }\n  }\n"])));
var templateObject_1;
