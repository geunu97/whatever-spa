import { Header } from '../components/header';

export const Home = () => {
  const getTemplate = () => {
    return `     
      ${Header()}
      <div>홈 페이지입니다.</div>
    `;
  };

  return getTemplate();
};
