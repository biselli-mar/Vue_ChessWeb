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
  { path: '/:catchAll(.*)*', component: () => import('pages/ErrorNotFound.vue') }
]

export default routes
