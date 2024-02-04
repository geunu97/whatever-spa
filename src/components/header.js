import { hashLocation } from '../utils/hashLocation.js';

export const Header = () => {
  console.log(hashLocation.path());

  const routes = [
    { path: '#', text: '홈' },
    { path: '#blog', text: '블로그' },    
  ];

  const getActiveClass = (route) => {
    const mainPath = hashLocation.path().split('/')[0];
    return route.path === `#${mainPath}` ? 'active' : '';
  }

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