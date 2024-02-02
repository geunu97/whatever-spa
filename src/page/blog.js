import { fetchData } from '../utils/fetchData.js';

export const Blog = async () => {  
  const posts = await fetchData('/mocks/dummy.json');  

  return `
    <div class="blog">
      <div class="posts">
        ${posts.map(post => (
          `
            <a class="post" href=#blog/detail/${post.id}>
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
};