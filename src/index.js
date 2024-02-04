import { render } from "./utils/render.js"
import { Home } from './page/home.js';
import { Blog } from './page/blog.js';
import { BlogDetail } from './page/blogDetail.js';

export const Index = () => {
  const routes = [
    { path: '', component: Home },
    { path: 'blog', component: Blog },
    { path: 'blog/detail', component: BlogDetail },    
  ];

  render.page(routes);
}

Index();