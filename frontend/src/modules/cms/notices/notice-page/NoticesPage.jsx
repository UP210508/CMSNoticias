import { ButtonAddNotice, LocationRoute, Pagination } from "../../../components";
import { useNotices } from "../../../hooks";
import { LayoutCMS } from "../../layout/LayoutCMS";
import { NoticesList } from "../notices-list/NoticesList";
import { NoticesNews } from "../notices-news/NoticesNews";
import { NoticesSectionHeader } from "../notices-section-header/NoticesSectionHeader";
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

        <header className='flex flex-between'>
          <NoticesSectionHeader title="Tus creaciones" text="Puedes visualizar tus creaciones en este pantalla. Edita, crea y elimina
          las noticias que desees. Despierta tu lado creativo." />
          <div>
            <p className="notices__stat">Última creación: <span>10 de Agosto de 2025</span></p>
            <p className="notices__stat">Noticias creadas: <span>10</span></p>
          </div>
        </header>

        <NoticesSelected />

        <div className="notices__notices section-space">
          <div className="flex flex-end mb-4">
            <Pagination />
          </div>
          <NoticesList notices={notices} />
        </div>

      </main>

      <section className="section-space">
        <NoticesSectionHeader 
          title="Otras Noticias" 
          text="Entérate de lo que está pasando y encuentra inspiración para crear tus
          publicaciones. Lo más nuevo y lo último en el mundo y sus rincones." 
        />
        <NoticesNews />
      </section>
    </LayoutCMS>
  );
};
