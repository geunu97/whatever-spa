import { fetchData } from '../../utils/fetchData';
import { PostType } from './types';

export const blog = {
  getPosts: async (): Promise<PostType[] | []> => {
    const posts = await fetchData<PostType[]>('/blog/posts');
    return posts || [];
  },

  getPost: async (id: string): Promise<PostType | null> => {
    const posts = await blog.getPosts();
    const post = posts.filter((post) => post.id === id);
    return post?.length !== 0 ? post[0] : null;
  },
};
