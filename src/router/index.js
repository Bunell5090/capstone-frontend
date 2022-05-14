import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import PetView from "../views/PetView.vue";
import CustomerView from "../views/CustomerView.vue";
import PetIndex from "../views/PetIndex.vue";
import CalendarView from "../views/CalendarView.vue";
import CustomerIndex from "../views/CustomerIndex.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/calendar",
    name: "calendar",
    component: CalendarView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/pets/:id",
    name: "petview",
    component: PetView,
  },
  {
    path: "/pets",
    name: "pets",
    component: PetIndex,
  },
  {
    path: "/customers/:id",
    name: "customerview",
    component: CustomerView,
  },
  {
    path: "/customers",
    name: "customer",
    component: CustomerIndex,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
