import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Table from "../views/Table.vue";
import Movie from "../views/Movie.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    component: Home,
  },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  {
    path: "/table",
    component: Table,
    props: true,
  },
  { path: "/movie", component: Movie, props: true },
  {
    path: "/movie/:id?",
    name: "movie",
    component: Movie,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
