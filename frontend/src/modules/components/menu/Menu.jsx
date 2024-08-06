import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Menu = () => {

  const [isFirstSeccionOpen, setIsFirstSeccionOpen] = useState(false);
  const chevronUp = useRef();
  const chevronDown = useRef();

  useEffect( () => {
    if ( isFirstSeccionOpen ) {
      chevronDown.current.classList.remove('show');
      chevronDown.current.classList.add('hidden');

      chevronUp.current.classList.remove('hidden');
      chevronUp.current.classList.add('show');
    }
  }, [ isFirstSeccionOpen ])

  return (
    <aside className="menu">
      <div className="menu__container">
        <section className="menu__section">
          <header className="menu__header flex flex-between">
            <p className="menu__header-name">Noticias</p>
            <div className="menu__header-line"></div>
            <i 
              ref={ chevronDown }
              onClick={() => setIsFirstSeccionOpen( false )} 
              className='bx bxs-chevron-down menu__header-icon hidden'
              ></i>
            <i 
              ref={ chevronUp }
              onClick={() => setIsFirstSeccionOpen( true )} 
              className='bx bxs-chevron-up menu__header-icon'
            ></i>
          </header>
          <nav className={`menu__nav ${isFirstSeccionOpen && 'hidden'}`}>
            <ul className="menu__list flex flex-column">
              <NavLink to="/cms/pefil" className={`menu__link`}>
                <i className='bx bx-info-circle menu__icon' ></i>
                General
              </NavLink>
              <NavLink to="/cms/estadisticas" className={`menu__link`}>
                <i className='bx bx-tv menu__icon' ></i>
                Entretenimiento
              </NavLink>
              <NavLink to="/cms/configuracion" className={`menu__link`}>
                <i className='bx bx-microphone menu__icon' ></i>
                Política
              </NavLink>
              <NavLink to="/cms/configuracion" className={`menu__link`}>
                <i className='bx bx-cloud-rain menu__icon' ></i>
                Clima
              </NavLink>
              <NavLink to="/cms/configuracion" className={`menu__link`}>
                <i className='bx bx-tennis-ball menu__icon' ></i>
                Deportes
              </NavLink>
              <NavLink to="/cms/configuracion" className={`menu__link`}>
                <i className='bx bx-flag menu__icon' ></i>
                Nacionales
              </NavLink>
              <NavLink to="/cms/configuracion" className={`menu__link`}>
                <i className='bx bx-world menu__icon' ></i>
                Internacionales
              </NavLink>
            </ul>
          </nav>
        </section>
        <section className="menu__section">
          <header className="menu__header flex flex-between">
            <p className="menu__header-name">Sistema</p>
            <div className="menu__header-line"></div>
            <i className='bx bxs-chevron-down menu__header-icon hidden' ></i>
            <i className='bx bxs-chevron-up menu__header-icon' ></i>
          </header>
          <nav className="menu__nav">
            <ul className="menu__list flex flex-column">
              <NavLink to="/cms/pefil" className={`menu__link`}>
                <i className='bx bx-user menu__icon' ></i>
                Perfil
              </NavLink>
              <NavLink to="/cms/estadisticas" className={`menu__link`}>
                <i className='bx bx-stats menu__icon' ></i>
                Estadísticas
              </NavLink>
              <NavLink to="/cms/configuracion" className={`menu__link`}>
                <i className='bx bx-cog menu__icon' ></i>
                Configuración
              </NavLink>
              <NavLink to="/cms/configuracion" className={`menu__link`}>
                <i className='bx bx-log-out-circle menu__icon' ></i>
                Salir
              </NavLink>
            </ul>
          </nav>
        </section>
      </div>
    </aside>
  )
}
