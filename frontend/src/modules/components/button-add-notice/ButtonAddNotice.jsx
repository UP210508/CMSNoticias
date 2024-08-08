import { Link } from 'react-router-dom';
import { usePage } from '../../hooks';

export const ButtonAddNotice = () => {
  const { getRouteName } = usePage();
  const { lastPage } = getRouteName();

  return (
    <Link className="button-add flex flex-center" to={`/cms/noticias/${lastPage}/nueva-noticia`}>
      <button className="btn btn--blue">
        <i className="bx bx-add-to-queue button-add__icon"></i>
        <p className="button-add__text">Agregar Noticia</p>
      </button>
    </Link>
  );
};
