import { ButtonAddNotice } from "../../components/button-add-notice/ButtonAddNotice"
import { LayoutCMS } from "../layout/LayoutCMS"
import { useNotices, usePage } from "../../hooks"
import { NoticesList } from "./NoticesList";
import { NoticesSelected } from "./NoticesSelected";
import { Pagination } from "../../components/pagination/Pagination";

export const NoticesPage = () => {

  const { getPageName } = usePage();
  const pageName = getPageName();
  const { notices } = useNotices();

  return (
    <LayoutCMS className="notices">

      <header className="notices___header flex flex-between">
        <div className="notices__header-first">  
          <p className="notices__nav">CMS / Noticias / { pageName }</p>
          <p className="notices__title">Noticias { pageName }</p>
        </div> 
        <div className="notices__header-stats flex flex-center">
          <ButtonAddNotice />
          <div>
            <p className="notices__cat">Última creación: <span>10 de Agosto de 2025</span></p>
            <p className="notices__cat">Noticias creadas: <span>10</span></p>
          </div>
        </div>
      </header>

      <div className="notices__content">
        <div className="notices__notices">
          <div className="notices__pagination flex flex-between">
            <h4>Tus creaciones</h4>
            <Pagination />
          </div>
          <NoticesList notices={ notices } />
        </div>
        <NoticesSelected />
      </div>
    </LayoutCMS>
  )
}
