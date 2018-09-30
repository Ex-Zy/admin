import Vue from "vue";
import Router from "vue-router";
import Users from "@/views/Users.vue";
import Edit from "@/views/Edit.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  linkActiveClass: "active",
  linkExactActiveClass: "exact",
  routes: [
    {
      path: "/edit/:id",
      name: "edit",
      component: Edit
    },
    {
      path: "/users",
      name: "users",
      component: Users
    }
  ]
});
