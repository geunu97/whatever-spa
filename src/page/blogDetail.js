import { hashLocation } from '../utils/hashLocation.js';
import { blog } from '../api/blog.js';

export const BlogDetail = async () => {
  const blogId = hashLocation.params().id;
  if (!blogId) {
    return '';
  }

  const post = await blog.getPost(blogId);
  if (!post.id) {
    return '';
  }

  return `
    <div class="blogDetail">
      <div class="post">
        <h1 class="title">${post.title}</h1>
        <div class="info">${post.category} | ${post.date}</div>
        <img src=${post.image} alt="게시글 이미지"/>
        <div class="content">${post.content}</div>
      </div>
    </div>
  `;
};