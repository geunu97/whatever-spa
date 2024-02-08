import { blog } from '../apis/blog.js';
import { Header } from '../components/header.js';
import { gwRouter } from "../utils/gwRouter.js"
import sampleImage from "../../public/img/sample1.png";
import '../styles/blogDetail.css';

export const BlogDetail = async () => {
  const blogId = gwRouter.check.params().id;
  if (!blogId) {
    return;
  }

  const post = await blog.getPost(blogId);
  if (!post.id) {
    return;
  }

  const getTemplate = () => {
    return `
      ${Header()}
      <div class="blogDetail">
        <div class="post">
          <h1 class="title">${post.title}</h1>
          <div class="info">${post.category} | ${post.date}</div>
          <img src=${sampleImage} alt="게시글 이미지"/>
          <div class="content">${post.content}</div>
        </div>
      </div>
    `;
  }

  return getTemplate();
};