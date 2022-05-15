import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import RegisterView from "../views/RegisterView.vue";
import PetView from "../views/PetView.vue";
import CustomerView from "../views/CustomerView.vue";
import PetIndex from "../views/PetIndex.vue";
import PetNew from "../views/PetNew.vue";
import PetEdit from "../views/PetEdit.vue";
import CalendarView from "../views/CalendarView.vue";
import CustomerIndex from "../views/CustomerIndex.vue";
import CustomerNew from "../views/CustomerNew.vue";
import CustomerEdit from "../views/CustomerEdit.vue";

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
    path: "/logout",
    name: "logout",
    component: LogoutView,
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
    path: "/pets/new",
    name: "petsnew",
    component: PetNew,
  },
  {
    path: "/pets/:id/edit",
    name: "petsedit",
    component: PetEdit,
  },
  {
    path: "/customers/:id",
    name: "customersview",
    component: CustomerView,
  },
  {
    path: "/customers",
    name: "customers",
    component: CustomerIndex,
  },
  {
    path: "/customers/new",
    name: "customersnew",
    component: CustomerNew,
  },
  {
    path: "/customers/:id/edit",
    name: "customersedit",
    component: CustomerEdit,
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
