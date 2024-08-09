import { NoticeCardCreation } from './NoticeCardCreation';

export const NoticesList = ({ notices }) => {
  return (
    <ul className="notices__grid">
      {notices.map((notice) => (
        <NoticeCardCreation notice={notice} key={notice.id} />
      ))}
    </ul>
  );
};
