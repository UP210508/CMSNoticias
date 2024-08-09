import { useEffect, useState } from "react";
import { Spinner } from "../../../components";
import { getCategoryNews, getEnvVariables } from "../../../helpers";
import { useFetch, useNotices, usePage, useUI } from "../../../hooks";
import { NoticeCard } from "../notice-card/NoticeCard";

const { VITE_API_KEY_NEWS: apiKey } = getEnvVariables();

export const NoticesNews = () => {

  const [articles, setArticles] = useState([]);
  const { getRouteName } = usePage();
  const { getData } = useFetch();
  const { lastPage } = getRouteName();
  const category = getCategoryNews(lastPage);
  const { isLoading } = useUI();
  const { notices } = useNotices();

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
    <div className="notices__articles">
      <ul className="swiper">
        { notices.map((notice) => (
          <div className="swiper__slide">
            <NoticeCard key={notice.id} {...notice} />
          </div>
        ))}
        <div className="swiper__button swiper__button--left"></div>
        <div className="swiper__button swiper__button--right"></div>
      </ul>
    </div>
  );
};
