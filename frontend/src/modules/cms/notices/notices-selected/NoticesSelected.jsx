import { Link } from "react-router-dom";
import { capitalizeString } from "../../../helpers";
import { useNotices } from "../../../hooks";

export const NoticesSelected = () => {
  const { selectedNotice } = useNotices();
  const { img, title, author, body, publishDate, id, category } = selectedNotice;

  return (
    <div className="card-notice-selected section-space">
      <div className="flex flex-center card-notice-selected__imageBox">
        <img src={img} className="card-notice-selected__image" alt={title} />
      </div>
      <div className="card-notice-selected__content">
        <h3 className="card-notice-selected__title">{title}</h3>
        <div className="card-notice-selected__meta flex flex-between">
          <div>
            <p className="card-notice-selected__text">
              Escrito por: <span>{author}</span>
            </p>
            <p className="card-notice-selected__text">
              Fecha de publicación: <span>{publishDate}</span>
            </p>
          </div>
          <p className="card-notice-selected__tag">
            {capitalizeString(category)}
          </p>
        </div>
        <p className="card-notice-selected__body">{body}</p>
        <div className="flex flex-end">
          <Link
            to={`/cms/noticias/noticia/${id}`}
            className="btn btn--info card-notice-selected__button"
          >
            Ver Noticia
          </Link>
        </div>
      </div>
    </div>
  );
};
