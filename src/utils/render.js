export const render = {
  refresh: (HTMLString, selector) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(HTMLString, 'text/html');
    const content = doc.querySelector(selector).innerHTML;

    const $target = document.querySelector(selector)    
    $target.innerHTML = content;
  }
}