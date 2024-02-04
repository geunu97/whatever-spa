import { render } from "../utils/render.js"

export const Home = () => {
  const getTemplate = () => {
    return `
      <div>홈 페이지입니다.</div>
    `;
  }    

  render.mount(getTemplate());
};