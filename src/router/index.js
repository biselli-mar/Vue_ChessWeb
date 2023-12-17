/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFound from "../views/NotFoundView.vue";
import About from "../views/AboutView.vue";
import Play from "../views/PlayView.vue";
import ProfileView from "../views/ProfileView.vue";
import CreateSession from "../views/CreateSessionView.vue";
import JoinSession from "../views/JoinSessionView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/about", name: "about", component: About },
  { path: "/play", name: "play", component: Play },
  { path: "/profile", name: "profile", component: ProfileView },
  { path: "/session", name: "session", component: CreateSession },
  { path: "/session/join", name: "join", component: JoinSession },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
