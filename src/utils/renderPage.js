import { Header } from '../components/header.js';
import { NotFound } from '../page/notFound.js';

export const renderPage = (routes) => {
  const $root = document.getElementById('root');
  
  const render = async () => {
    try {      
      const hash = window.location.hash.replace('#', '');    
      const component = routes.find(route => route.path === hash)?.component || NotFound;
      $root.innerHTML = await getComponents(component);
    } catch (err) {
      console.error(err);
    }
  };

  const getComponents = async (component) => {
    return `
      ${Header()}
      ${await component()}
    `
  }
    
  window.addEventListener('hashchange', render);  
  window.addEventListener('DOMContentLoaded', render);
}

