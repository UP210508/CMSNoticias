import { ButtonAddNotice } from "../../components/button-add-notice/ButtonAddNotice";
import { LayoutCMS } from "../layout/LayoutCMS";
import { useNotices } from "../../hooks";
import { NoticesList } from "./NoticesList";
import { NoticesSelected } from "./NoticesSelected";
import { LocationRoute, Pagination } from "../../components";
import { NoticesNews } from "./NoticesNews";

export const NoticesPage = () => {
  const { notices } = useNotices();

  return (
    <LayoutCMS className="notices">
      <header className="notices___header flex flex-between">
        <div className="notices__header-first">
          <LocationRoute />
        </div>
        <div className="notices__header-stats flex flex-center">
          <ButtonAddNotice />
          <div>
            <p className="notices__cat">
              Última creación: <span>10 de Agosto de 2025</span>
            </p>
            <p className="notices__cat">
              Noticias creadas: <span>10</span>
            </p>
          </div>
        </div>
      </header>

      <main className="notices__content">
        <NoticesSelected />
        <div className="notices__notices">
          <div className="notices__pagination flex flex-between">
            <div className="flex flex-column">
              <h4>Tus creaciones</h4>
              <p className="notices__text">
                Puedes visualizar tus creaciones en este pantalla. Edita, crea y
                elimina las noticias que desees. Despierta tu lado creativo.
              </p>
            </div>
          </div>
          <NoticesList notices={notices} />
          <div className="flex flex-between">
            <Pagination />
            <p>Paginas</p>
          </div>
        </div>
      </main>
      <section>
        <div className="flex flex-column">
          <h4>Otras Noticias</h4>
          <p className="notices__text">
            Entérate de lo que está pasando y encuentra inspiración para crear
            tus publicaciones. Lo más nuevo y lo último en el mundo y sus
            rincones.
          </p>
        </div>
        <NoticesNews />
      </section>
    </LayoutCMS>
  );
};
