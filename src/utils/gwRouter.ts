import { NotFound } from '../pages/notFound';

// 타입
interface RouterType {
  init: (routes: { path: string; component: () => Promise<string> | string }[]) => void;
  check: {
    url: () => string;
    path: () => string;
    params: () => Record<string, string>;
  };
  move: {
    push: (state: any, url: string) => void;
  };
}

// 초기화
const init: RouterType['init'] = (routes) => {
  const $root = document.getElementById('root');

  const render = async () => {
    try {
      const path = check.path();
      const page = (await routes.find((route) => route.path === path)?.component()) || NotFound();
      if ($root) {
        $root.innerHTML = page;
      }
    } catch (err) {
      NotFound();
    }
  };

  window.addEventListener('hashchange', render);
  window.addEventListener('DOMContentLoaded', render);
};

// 확인
const check: RouterType['check'] = {
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

    const queryParams: Record<string, string> = {};
    queryString.split('&').forEach((param) => {
      const [key, value] = param.split('=');
      queryParams[key] = value;
    });

    return queryParams;
  },
};

// 이동
const move: RouterType['move'] = {
  push: (state, url) => {
    history.pushState(state, '', `#${url}`);
  },
};

// 예외처리
// const validate = {

// }

export const gwRouter = { init, check, move };
