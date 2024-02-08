import { fetchData } from '../utils/fetchData.js';

export const blog = {
  getPosts: async () => {    
    const posts = await fetchData('/blog/posts');
    return posts;
  },
  
  getPost: async (id) => {
    const posts = await blog.getPosts();    
    const post = posts.filter(post => post.id === id);
    return post.length === 0 ? {} : post[0]    
  }  
}
