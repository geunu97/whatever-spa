import { render } from "../utils/render.js"

export const NotFound = () => {
  const getTemplate = () => {
    return `
      <h1>잘못된 경로입니다.</h1>
    `
  }

  render.mount(getTemplate());
}