import Vue from "vue";
import Router from "vue-router";

import Index from "~/pages/index";
import NewsList from "~/pages/NewsList";
import NewsDetail from "~/pages/NewsDetail";

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: "history",
    routes: [
      {
        path: "/news/:tag?",
        alias: "/",
        component: Index,
        children: [
          {
            path: "",
            name: "NewsList",
            component: NewsList,
            props: true
          },
          {
            path: "/news/:tag?/:id([a-fA-F\\d]{32})/:title",
            name: "NewsDetail",
            component: NewsDetail,
            props: true
          }
        ]
      }
    ]
  });
}
