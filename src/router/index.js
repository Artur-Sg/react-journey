import About from '../pages/About';
import Posts from '../pages/Posts';

export const routes = [
  { path: '/about', component: About },
  { path: '/posts', component: Posts },
  { path: '/posts/:id', component: About },
];
