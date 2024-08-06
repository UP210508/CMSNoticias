import { Link } from "react-router-dom";
import { capitalizeString } from "../../helpers";
import { useNotices } from "../../hooks"

export const NoticesSelected = () => {
  const { selectedNotice } = useNotices();
  const { img, title, author, body, publishDate, id, category } = selectedNotice;

  return (
    <aside className="notices__selected">
      <header className="notices__selected-header">
        <h2 className="notices__selected-title">{title}</h2>
      </header>
      <div className="flex flex-center">
        <img src={img} className="notices__selected-image" alt={title} />
      </div>
      <div className="notices__selected-meta flex flex-between">
        <div>
          <p className="notices__selected-info">Publicado por: <span>{author}</span></p>
          <p className="notices__selected-info">Fecha: <span>{publishDate}</span></p>
        </div>
        <div className="flex flex-center">
          <i className='bx bxs-category icon icon--blue'></i>
          <p className="notices__selected-info">{ capitalizeString( category ) }</p>
        </div>
      </div>
      <p className="notices__selected-content">
        { body }
      </p>
      <Link to={`/notice/${id}`} className="btn btn--blue">
        Ver Noticia Completa
      </Link>
    </aside>
  )
}
