import { gwRouter } from "./utils/gwRouter.js"
import { Home } from './pages/home.js';
import { Blog } from './pages/blog.js';
import { BlogDetail } from './pages/blogDetail.js';
import { apiWorker } from './mocks/apiHandler.js'
import './styles/global.css';

export const Index = () => {
  const routes = [
    { path: '', component: Home },
    { path: 'blog', component: Blog },
    { path: 'blog/detail', component: BlogDetail },    
  ];

  // Setup Router
  gwRouter.init(routes);

  // Setup API mocking
  apiWorker.start()

  // 아직 실제 서버가 존재하지 않음
  // if (process.env.NODE_ENV === "development") {
  //   apiWorker.start()
  // }
}

Index();