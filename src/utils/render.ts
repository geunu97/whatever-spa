export const render = {
  refresh: (HTMLString: string, selector: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(HTMLString, 'text/html');
    const content = doc.querySelector(selector)?.innerHTML;

    const $target = document.querySelector(selector);
    if ($target) {
      $target.innerHTML = content || '';
    }
  },
};
