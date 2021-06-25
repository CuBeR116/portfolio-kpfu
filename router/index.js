import Vue from "vue";
import Router from "vue-router";
import Main from "../components/Main";
import About from "../components/About";
import Contacts from "../components/Contacts";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      component: Main
    },

    {
      path: "/about",
      component: About
    },

    {
      path: "/contacts",
      component: Contacts
    }
  ]
});
