import { blog } from '../api/blog.js';
import { render } from "../utils/render.js"

export const Blog = async () => {  
  const categories = ['전체', '문화', '서비스', '커리어'];
  let selectedCategory = categories[0];
  const posts = await blog.getPosts();

  const getFilteredPosts = () => {
    return selectedCategory === categories[0] ? posts : posts.filter((post) => post.category === selectedCategory);
  }

  const handleCategoryClick = (e) => {
    const clickedButton = e.target;

    if(categories.includes(clickedButton.textContent)) {
      selectedCategory = clickedButton.textContent;
      render.refresh(getTemplate(), ".blog");  
    }
  };

  const getActiveCategoryClass = (category) => {      
    return selectedCategory === category ? 'active' : ''
  }

  const getTemplate = () => {
    return `
      <div class="blog">
        <div class="categories">
          ${categories.map(category => (
            `<button class="category ${getActiveCategoryClass(category)}">${category}</button>`)
          ).join('')}
        </div>
        
        <div class="posts">
          ${getFilteredPosts().map(post => (
            `
              <a class="post" href=#blog/detail?id=${post.id}>
                <img src=${post.image} alt="게시글 이미지"/>
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
  render.mount(getTemplate());  
};