import { Link } from "react-router-dom";
import { getCurrentYear } from "../../helpers/getCurrentYear"

const currentYear = getCurrentYear();

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container flex flex-between">
        <div className="footer__info">
          <p className="footer__text">&copy; { currentYear } CMS Noticias. Todos los derechos reservados</p>
        </div>
        <nav className="footer__nav">
          <ul className="footer__list flex flex-center">
            <Link className="footer__link" to="/">FAQs</Link>
            <Link className="footer__link" to="/">Política de privacidad</Link>
            <Link className="footer__link" to="/">Términos y condiciones</Link>
            <Link className="footer__link" to="/">Sitio Web</Link>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
