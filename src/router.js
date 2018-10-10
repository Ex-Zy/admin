import Vue from "vue";
import Router from "vue-router";
import Users from "@/views/Users";
import Edit from "@/views/Edit";
import Add from "@/views/Add";
import Home from "@/views/Home";

Vue.use(Router);

export default new Router({
  mode: "history",
  linkActiveClass: "active",
  linkExactActiveClass: "exact",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: Edit
    },
    {
      path: "/users",
      name: "users",
      component: Users
    },
    {
      path: "/add",
      name: "add",
      component: Add
    }
  ]
});
