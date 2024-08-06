import { useNotices } from "../../hooks/useNotices";

export const NoticeCard = ({ notice }) => {

  const { id, title, body, author, publishDate, img } = notice;
  const { selectNotice } = useNotices();

  return (
    <div className='card flex'>
      <div className="card__imageBox">
        <img src={ img } alt={ title } className="card__image" />
      </div>
      <div className="card__content">
        <h2 className="card__title">{ title }</h2>
        <p className="card__text">{body}</p>
        <div className="flex flex-between">
          <p className="card__author">Por: { author }</p>
          <i onClick={ () => selectNotice( id ) } className='bx bx-show icon icon--blue'></i>
        </div>
      </div>
    </div>
  )
}
