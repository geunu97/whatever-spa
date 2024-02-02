import { NotFound } from '../page/notFound.js';

export const Router = (routes) => {
  const $root = document.getElementById('root');
  
  const render = () => {
    try {      
      const hash = window.location.hash.replace('#', '');    
      const component = routes.find(route => route.path === hash)?.component || NotFound;
      $root.innerHTML = component();
    } catch (err) {
      console.error(err);
    }
  };
    
  window.addEventListener('hashchange', render);  
  window.addEventListener('DOMContentLoaded', render);
}

