import Vue from "vue";
import Router from "vue-router";

import NewPost from "../components/NewPost.vue";
import Posts from "../components/Posts.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    redirect: "/posts"
  },
  {
    path: "/posts",
    component: Posts,
    name: "all-posts"
  },
  {
    path: "/new-post",
    component: NewPost,
    name: "new-post"
  }
];

const router = new Router({
    mode: 'history',
    routes
})

export default router