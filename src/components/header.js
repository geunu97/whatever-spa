import { gwRouter } from "../utils/gwRouter.js"
import mainLogo from "../../public/img/mainLogo.png"
import '../styles/header.css';

export const Header = () => {
  const routes = [
    { path: '', content: '홈' },
    { path: 'blog', content: '블로그' },    
  ];

  const getActiveClass = (route) => {
    const mainPath = gwRouter.check.path().split('/')[0];
    return route.path === `${mainPath}` ? 'active' : '';
  }

  const getTemplate = () => {
    return `    
      <div class="header">
        <a href="#"><img src=${mainLogo} alt="Main Logo"></a>      
        <nav>
          <ul>
            ${routes.map(route => (
              `
                <li><a href=#${route.path} class=${getActiveClass(route)}>${route.content}</a></li>                             
              `          
            )).join('')}          
          </ul>      
        </nav>         
      </div>
    `; 
  }  

  return getTemplate();
}