import { blog } from '../apis/blog';
import { Header } from '../components/header';
import { render } from "../utils/render";
import sampleImage from "../../public/img/sample1.png";
import '../styles/blog.css';

export const Blog = async () => {  
  const categories = ['전체', '문화', '서비스', '커리어'];
  let selectedCategory = categories[0];

  const posts = await blog.getPosts();
  if (posts.length === 0) {
    return '';
  }

  const getFilteredPosts = () => {
    return selectedCategory === categories[0] ? posts : posts.filter((post) => post.category === selectedCategory);
  }

    const handleCategoryClick = (e: MouseEvent): void => {
    const clickedButton = e.target as HTMLButtonElement;

    if(categories.includes(clickedButton.textContent || '')) {
      selectedCategory = clickedButton.textContent || '';
      render.refresh(getTemplate(), ".blog");  
    }
  };

  const getActiveCategoryClass = (category: string) => {      
    return selectedCategory === category ? 'active' : ''
  }

  const getTemplate = () => {
    return `
      ${Header()}
      <div class="blog">
        <a class="mainPost" href=#blog/detail?id=${posts[0].id}>
          <img src=${sampleImage} alt="게시글 대표이미지" width="200px"/>
          <h2 class="title">${posts[0].title}</h2>
          <p class="description">${posts[0].description}</p>
        </a>
        <div class="categories">
          ${categories.map(category => (
            `<button class="category ${getActiveCategoryClass(category)}">${category}</button>`)
          ).join('')}
        </div>
        <div class="posts">
          ${getFilteredPosts().map(post => (
            `
              <a class="post" href=#blog/detail?id=${post.id}>
                <img src=${sampleImage} alt="게시글 이미지"/>
                <h2 class="title">${post.title}</h2>
                <p class="description">${post.description}</p>
                <span class="category">${post.category}</span>
              </a>    
            `  
          )).join('')}          
        </div>      
      </div>
    `;
  }

  document.body.addEventListener("click", handleCategoryClick)

  return getTemplate();
};