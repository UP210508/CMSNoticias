import { Link } from 'react-router-dom';

export const ButtonAddNotice = () => {
  return (
    <Link className="button-add flex flex-center" to="/cms/nueva-noticia">
      <button className="btn btn--blue">
        <i className="bx bx-add-to-queue button-add__icon"></i>
        <p className="button-add__text">Agregar Noticia</p>
      </button>
    </Link>
  );
};
