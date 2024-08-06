import { Header, Menu } from "../../components"

export const LayoutCMS = ({ children }) => {
  return (
    <div className="layout-cms">
      <Header />

      <div className="layout-cms__container">
        <Menu />
        <div className="layout-cms__page">
          { children }
        </div>
      </div>
    </div>
  )
}
