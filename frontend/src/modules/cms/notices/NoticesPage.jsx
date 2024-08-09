import { ButtonAddNotice } from '../../components/button-add-notice/ButtonAddNotice';
import { LayoutCMS } from '../layout/LayoutCMS';
import { useNotices } from '../../hooks';
import { NoticesList } from './NoticesList';
import { NoticesSelected } from './NoticesSelected';
import { LocationRoute, Pagination } from '../../components';
import { NoticesNews } from './NoticesNews';

export const NoticesPage = () => {
  const { notices } = useNotices();

  return (
    <LayoutCMS className="notices">
      <header className="flex flex-between section-space">
        <LocationRoute />
        <ButtonAddNotice />
      </header>

      <main className="notices__main">
        <NoticesSelected />
        <div className="notices__notices section-space">
          <NoticesList notices={notices} />
          <div className="flex flex-end">
            <Pagination />
          </div>
        </div>
      </main>

      <section className="section-space">
        <NoticesNews />
      </section>
    </LayoutCMS>
  );
};
