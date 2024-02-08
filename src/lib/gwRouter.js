import { NotFound } from '../page/notFound.js';

// 초기화
const init = (routes) => {
  const $root = document.getElementById('root');

  const render = async () => {
    try {            
      const path = check.path();
      const page = routes.find(route => route.path === path)?.component || NotFound;
      $root.innerHTML = await page();
    } catch (err) {
      NotFound();      
    }
  };
    
  window.addEventListener('hashchange', render);  
  window.addEventListener('DOMContentLoaded', render);
}

// 확인
const check = {
  url: () => {
    const hash = window.location.hash.replace('#', '');
    return hash;
  },

  path: () => {
    const url = check.url();        
    const path = url.split('?')[0];
    return path;
  },

  params: () => {
    const url = check.url();
    const queryString = url.split('?')[1] || '';

    const queryParams = {};
    queryString.split('&').forEach((param) => {
      const [key, value] = param.split('=');
      queryParams[key] = value;
    });

    return queryParams;
  }
}

// 이동
const move = {
  push: (state, url) => {
    history.pushState(state, "", `#${url}`)
  }
}

// 예외처리
// const validate = {

// }
  
export const gwRouter = { init, check, move }
