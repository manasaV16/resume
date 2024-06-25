import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import ResumeBuilder from '../components/ResumeBuilder.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/resume',
    name: 'ResumeBuilder',
    component: ResumeBuilder,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
console.log("hello wolrd");