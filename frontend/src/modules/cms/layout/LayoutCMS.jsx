import { Header, Menu } from "../../components"

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
          <footer>Footer</footer> 
        </div>
      </div>

    </div>
  )
}
