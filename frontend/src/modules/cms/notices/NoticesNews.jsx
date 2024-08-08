import { useEffect, useState } from "react";
import { formatAuthor, getCategoryNews, getEnvVariables } from "../../helpers"
import { useFetch, usePage } from "../../hooks";
import logoCMS from '../../../assets/img/logo.png'

const { VITE_API_KEY_NEWS: apiKey } = getEnvVariables();

export const NoticesNews = () => {

  const [articles, setArticles] = useState([])
  const { getRouteName } = usePage();
  const { getData } = useFetch();
  const { lastPage } = getRouteName();
  const category = getCategoryNews( lastPage );

  const endpointNews = `https://eventregistry.org/api/v1/article/getArticles?apiKey=${ apiKey }&keyword="${category}&articlesCount=6&lang=spa`;

  useEffect(() => {
    getNews();
  }, [ lastPage ]);

  const getNews = async () => {
    const { data: { articles: { results } } } = await getData( endpointNews );
    setArticles( results );
  }

  console.log(articles)

  return (
    <div className="notices__articles">
      <ul className="notices__articles-list">
        {
          articles.map( article => (
            <li className="notices__articles-card card">
              <div className="flex flex-center">
                <img className="notices__articles-image" src={ article.image || logoCMS } alt={ article.title } />
              </div>
              <div className="notices__articles-content flex flex-column">
                <div className="flex flex-start">
                  <p className="notices__articles-author">Escrito por: <span>{formatAuthor( article.authors )}</span></p>
                </div>
                <h3 className="notices__articles-title">{article.title}</h3>
                <p className="notices__articles-text">{article.body}</p>
                <div className="flex flex-end">
                  <a target="_blank" href={article.url} className="btn btn--blue  notices__articles-button">Leer Noticia</a>
                </div>
              </div>
            </li>
          ))
        }
       
      </ul>
    </div>
  )
}
