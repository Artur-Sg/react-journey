import About from '../pages/About';
import Login from '../pages/Login';
import { Post } from '../pages/Post';
import Posts from '../pages/Posts';

export const privateRoutes = [
  { path: '/about', component: About },
  { path: '/posts', component: Posts },
  { path: '/posts/:id', component: Post },
];

export const publicRoutes = [{ path: '/login', component: Login }];
