import { ButtonAddNotice, LocationRoute, Pagination } from "../../../components";
import { useNotices } from "../../../hooks";
import { LayoutCMS } from "../../layout/LayoutCMS";
import { NoticesList } from "../notices-list/NoticesList";
import { NoticesNews } from "../notices-news/NoticesNews";
import { NoticesSelected } from "../notices-selected/NoticesSelected";


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
