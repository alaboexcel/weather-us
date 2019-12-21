import Vue from "vue";
import Router from "vue-router";
import home from "./components/home.vue";
import weather from "./components/weather.vue";
import signup from "./components/signup.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/weather",
      name: "weather",
      component: weather
    },
    {
      path: "/signup",
      name: "signup",
      component: signup
    }
  ]
});
