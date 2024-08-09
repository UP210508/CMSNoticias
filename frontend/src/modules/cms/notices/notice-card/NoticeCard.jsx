import { Link } from 'react-router-dom';
import { formatAuthor } from "../../../helpers";
import logoCMS from '../../../../assets/img/logo.png';

export const NoticeCard = ({ image, title, authors, body }) => {
  return (
    <li className="card-notice">
      <div className="flex flex-center">
        <img
          className="card-notice__image"
          src={image || logoCMS}
          alt={title}
        />
      </div>
      <div className="card-notice__content flex flex-column">
        <div className="flex flex-start">
          <p className="card-notice__author">
            Escrito por: <span>{formatAuthor(authors)}</span>
          </p>
        </div>
        <h3 className="card-notice__title">{title}</h3>
        <p className="card-notice__text">{body}</p>
        <div className="flex flex-end">
          <Link
            className="btn btn--info card-notice__button"
            to="/cms/noticias/otras/noticia"
          >
            Ver Noticia
          </Link>
        </div>
      </div>
    </li>
  );
};
