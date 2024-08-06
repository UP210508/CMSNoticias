import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/img/logo.png';
import logoImage from '../../../assets/img/logo-image.png';

export const LayoutAuth = ({
  children,
  title = ''
}) => {

  const { pathname } = useLocation();

  return (
    <div className="layout-auth">
      <div className="layout-auth__container">
        <div className="layout-auth__content flex flex-column-center">
          <div className="flex flex-center">
            <img src={ logo } alt="Logo CMS Noticias" className="layout-auth__logo" />
          </div>
          <h1 className='layout-auth__title'>{ title }</h1>
          <p className="layout-auth__text">Comienza creando tus noticias para compartir con el mundo 📰. Se el reportero que tienes que ser. </p>
          
          <nav className="layout-auth__menu flex flex-evenly">
            <Link to={'/login'} className={`layout-auth__link ${ pathname === '/login' && 'layout-auth__link--active'}`}>Iniciar Sesión</Link>
            <Link to={'/registrar'} className={`layout-auth__link ${ pathname === '/registrar' && 'layout-auth__link--active'}`}>Registrarse</Link>
          </nav>

          { children }

          <p className="layout-auth__text">Síguenos en nuestras redes sociales para enterarte de las personas que usan nuestra aplicación</p>
          <div className="layout-auth__social">
            <a href="https://www.facebook.com/UniversidadPolitecnicaAguascalientes">
              <i className='bx bxl-facebook-circle icon icon--gray'></i>
            </a>
            <a href="https://www.instagram.com/upolitecnicaags">
              <i className='bx bxl-instagram-alt icon icon--gray'></i>
            </a>
            <a href="https://www.tiktok.com/@upolitecnicaags">
              <i className='bx bxl-tiktok icon icon--gray'></i>
            </a>
          </div>
        </div>
        <div className="layout-auth__image flex flex-center">
        <img src={ logoImage } alt="Logo CMS Noticias" className="layout-auth__bgImage" />
        </div>
      </div>
    </div>
  )
}
