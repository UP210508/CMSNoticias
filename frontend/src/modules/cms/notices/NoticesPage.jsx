import { ButtonAddNotice } from "../../components/button-add-notice/ButtonAddNotice"
import { LayoutCMS } from "../layout/LayoutCMS"
import { usePage } from "../../hooks"

export const NoticesPage = () => {

  const { getPageName } = usePage();

  return (
    <LayoutCMS className="notices">
      <h1 className="notices__title">Noticias &mdash; { getPageName() }</h1>

      <ButtonAddNotice />
    </LayoutCMS>
  )
}
