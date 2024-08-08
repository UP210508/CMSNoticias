import { LocationRoute } from "../../components"
import { LayoutCMS } from "../layout/LayoutCMS"

export const NewNotice = () => {
  return (
    <LayoutCMS>
      <div className="new-notice">
        <LocationRoute sectionVisible={false} />
        <header className="new-notice__header">
          <h2 className="new-notice__title">Crea una nueva noticia</h2>
        </header>
      </div>
    </LayoutCMS>
  )
}
