import { NoticeCardCreation } from '../notice-card-creation/NoticeCardCreation';

export const NoticesList = ({ notices }) => {
  return (
    <ul className="list list__notices">
      {notices.map((notice) => (
        <NoticeCardCreation notice={notice} key={notice.id} />
      ))}
    </ul>
  );
};
