import { useNotices } from '../../../hooks/useNotices';

export const NoticeCardCreation = ({ notice }) => {
  const { id, title, img } = notice;
  const { selectNotice } = useNotices();

  return (
    <div className="card-creation">
      <div className="card-creation__imageBox">
        <img src={img} alt={title} className="card-creation__image" />
      </div>
      <div className="card-creation__content" onClick={ () => selectNotice(id)}>
        <i className='bx bx-selection card-creation__icon'></i>
      </div>
    </div>
  );
};
