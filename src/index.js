import { gwRouter } from "./lib/gwRouter.js"
import { Home } from './page/home.js';
import { Blog } from './page/blog.js';
import { BlogDetail } from './page/blogDetail.js';
import './styles/style.css';

export const Index = () => {
  const routes = [
    { path: '', component: Home },
    { path: 'blog', component: Blog },
    { path: 'blog/detail', component: BlogDetail },    
  ];

  // Setup Router
  gwRouter.init(routes);
}

Index();