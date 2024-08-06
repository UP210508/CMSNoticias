import { Header, Menu } from "../../components"
import { ButtonAddNotice } from "../../components/button-add-notice/ButtonAddNotice"

export const LayoutCMS = ({ children }) => {
  return (
    <div className="layout-cms">
      <Header />

      <div className="layout-cms__container">
        <div className="layout-cms__menu">
          <Menu />
        </div>
        <div className="layout-cms__page">
          { children }
        </div>
      </div>
    </div>
  )
}
