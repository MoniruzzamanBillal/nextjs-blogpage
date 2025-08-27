"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainRouter = void 0;
const express_1 = require("express");
const blog_route_1 = require("../modules/blog/blog.route");
const router = (0, express_1.Router)();
const routeArray = [
    {
        path: "/blog",
        route: blog_route_1.blogRouter,
    },
];
routeArray.forEach((item) => {
    router.use(item.path, item.route);
});
exports.MainRouter = router;
