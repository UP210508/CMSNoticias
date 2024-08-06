import { Link } from 'react-router-dom';

export const ButtonAddNotice = () => {
  return (
    <button>
      <Link  className="button-add flex flex-center" to="/cms/nueva-noticia">
        <i className='bx bx-add-to-queue button-add__icon'></i>
        <p className="button-add__text">Agregar Noticia</p>
      </Link>
    </button>
  )
}
