import { Link } from 'react-router-dom';
import { capitalizeString } from '../../../helpers';
import { useNotices } from '../../../hooks';

export const NoticesSelected = () => {
  const { selectedNotice } = useNotices();
  const { img, title, author, body, publishDate, id, category } =
    selectedNotice;

  return (
    <>
      <header className='flex flex-between'>
        <div className="flex flex-column mb-4">
          <h2>Tus creaciones</h2>
          <p className="notices__text">
            Puedes visualizar tus creaciones en este pantalla. Edita, crea y
            elimina las noticias que desees. Despierta tu lado creativo.
          </p>
        </div>
        <div>
          <p className="notices__cat">Última creación: <span>10 de Agosto de 2025</span></p>
          <p className="notices__cat">Noticias creadas: <span>10</span></p>
        </div>
      </header>
      
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
    </>
  );
};
