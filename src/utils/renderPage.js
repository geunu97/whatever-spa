import { Header } from '../components/header.js';
import { NotFound } from '../page/notFound.js';
import { hashLocation } from './hashLocation.js';

export const renderPage = (routes) => {
  const $root = document.getElementById('root');
  
  const render = async () => {
    try {            
      const path = hashLocation.path();
      const component = routes.find(route => route.path === path)?.component || NotFound;
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

