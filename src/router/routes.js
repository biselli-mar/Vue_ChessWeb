import IndexPage from "../pages/IndexPage.vue";
import AboutPage from "../pages/AboutPage.vue";
import PlayPage from "../pages/PlayPage.vue";
import ProfilePage from "../pages/ProfilePage.vue";
import CreateSessionPage from "../pages/CreateSessionPage.vue";
import JoinSessionPage from "../pages/JoinSessionPage.vue";

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: "index", component: () => import('pages/IndexPage.vue') },
      { path: "/about", name: "about", component: AboutPage },
      { path: "/play", name: "play", component: PlayPage },
      { path: "/profile", name: "profile", component: ProfilePage },
      { path: "/session", name: "session", component: CreateSessionPage },
      { path: "/session/join", name: "join", component: JoinSessionPage },
    ]
  },
  { path: '/:catchAll(.*)*', component: () => import('pages/ErrorNotFound.vue') }
]

export default routes
