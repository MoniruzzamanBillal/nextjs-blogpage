import { Router } from "express";
import { blogRouter } from "../modules/blog/blog.route";

const router = Router();

const routeArray = [
  {
    path: "/blog",
    route: blogRouter,
  },
];

routeArray.forEach((item) => {
  router.use(item.path, item.route);
});

export const MainRouter = router;
