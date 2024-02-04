import { hashLocation } from '../utils/hashLocation.js';
import { render } from "../utils/render.js"

export const Header = () => {
  const routes = [
    { path: '#', text: '홈' },
    { path: '#blog', text: '블로그' },    
  ];

  const getActiveClass = (route) => {
    const mainPath = hashLocation.path().split('/')[0];
    return route.path === `#${mainPath}` ? 'active' : '';
  }

  const getTemplate = () => {
    return `    
      <div class="header">
        <a href="#"><img src="/assets/img/mainLogo.png" alt="Main Logo"></a>      
        <nav>
          <ul>
            ${routes.map(route => (
              `
                <li><a href=${route.path} class=${getActiveClass(route)}>${route.text}</a></li>                             
              `          
            )).join('')}          
          </ul>      
        </nav>         
      </div>
    `; 
  }  

  render.mount(getTemplate());
}