import { createRouter, createWebHistory } from 'vue-router';
import UserListView from '../views/UserListView.vue';
import TutorialHTMLView from '../views/TutorialHTMLView.vue';
import TutorialGitView from '../views/TutorialGitView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'user-list',
      component: UserListView
    },
    {
      path: '/tutorial/html',
      name: 'tutorial-html',
      component: TutorialHTMLView
    },
    {
      path: '/tutorial/git',
      name: 'tutorial-git',
      component: TutorialGitView
    }
  ]
});

export default router;