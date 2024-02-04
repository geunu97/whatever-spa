export const hashLocation = {
  url: () => {
    const hash = window.location.hash.replace('#', '');
    return hash;
  },

  path: () => {
    const url = hashLocation.url();        
    const path = url.split('?')[0];
    return path;
  },

  params: () => {
    const url = hashLocation.url();
    const queryString = url.split('?')[1] || '';

    const queryParams = {};
    queryString.split('&').forEach((param) => {
      const [key, value] = param.split('=');
      queryParams[key] = value;
    });

    return queryParams;
  }
}