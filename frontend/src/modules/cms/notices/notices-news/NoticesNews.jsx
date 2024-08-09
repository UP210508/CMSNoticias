import { useEffect, useState } from 'react';
import { Spinner } from '../../../components';
import { getCategoryNews, getEnvVariables } from '../../../helpers';
import { useFetch, usePage, useUI } from '../../../hooks';
import { NoticeCard } from '../notice-card/NoticeCard';

const { VITE_API_KEY_NEWS: apiKey } = getEnvVariables();

export const NoticesNews = () => {
  const [articles, setArticles] = useState([]);
  const { getRouteName } = usePage();
  const { getData } = useFetch();
  const { lastPage } = getRouteName();
  const category = getCategoryNews(lastPage);
  const { isLoading } = useUI();

  // const endpointNews = `https://eventregistry.org/api/v1/article/getArticles?apiKey=${apiKey}&keyword="${category}&articlesCount=6&lang=spa`;

  useEffect(() => {
    getNews();
  }, [lastPage]);

  const getNews = async () => {
    const {
      data: {
        articles: { results },
      },
    } = await getData(endpointNews);
    setArticles(results);
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <div className="flex flex-column">
        <h2>Otras Noticias</h2>
        <p className="notices__text">
          Entérate de lo que está pasando y encuentra inspiración para crear tus
          publicaciones. Lo más nuevo y lo último en el mundo y sus rincones.
        </p>
      </div>
      <div className="notices__articles">
        <ul className="notices__articles-list">
          {articles.map((article) => (
            <NoticeCard key={ article.id } { ...article } />
          ))}
        </ul>
      </div>
    </>
  );
};
