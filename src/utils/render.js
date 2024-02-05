import { Header } from '../components/header.js';
import { NotFound } from '../page/notFound.js';
import { hashLocation } from './hashLocation.js';

export const render = {
  page: (routes) => {
    const $root = document.getElementById('root');
  
    const render = async () => {
      try {            
        const path = hashLocation.path();
        const component = routes.find(route => route.path === path)?.component || NotFound;
        $root.innerHTML = '';
        await layout(component);
      } catch (err) {
        console.error(err);
      }
    };
  
    const layout = async (component) => {
      return `
        ${Header()}
        ${await component()}
      `
    }
      
    window.addEventListener('hashchange', render);  
    window.addEventListener('DOMContentLoaded', render);
  },

  mount: (HTMLString) => {
    const $temp = document.createElement('template');
    $temp.innerHTML = HTMLString;

    const $root = document.getElementById('root');    
    $root.appendChild($temp.content);    
  },

  refresh: (HTMLString, selector) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(HTMLString, 'text/html');
    const content = doc.querySelector(selector).innerHTML;

    const $target = document.querySelector(selector)    
    $target.innerHTML = content;
  }
}