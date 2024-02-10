import { gwRouter } from "./utils/gwRouter"
import { Home } from './pages/home';
import { Blog } from './pages/blog';
import { BlogDetail } from './pages/blogDetail';
import { apiWorker } from './mocks/apiHandler'
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