import { useRef, useState } from 'react';
import logoWhite from '../../../assets/img/logo-white.png';

export const Header = () => {

  const chevronUp = useRef();
  const chevronDown = useRef();
  const menuActions = useRef();

  const onShowMenuActions = () => {
    chevronUp.current.classList.remove('hidden');
    chevronDown.current.classList.add('hidden');
    menuActions.current.classList.add('header__actions--show');
  }

  const onCloseMenuActions = () => {
    chevronUp.current.classList.add('hidden');
    chevronDown.current.classList.remove('hidden');
    menuActions.current.classList.remove('header__actions--show');
  }

  return (
    <header className="header flex flex-between">
      <div className="header__first">
        <div className="flex flex-center">
          <img src={ logoWhite } alt="LOGO CMS WHITE" className='header__logo' />
          <p className='header__name'>CMS <br /> Noticias</p>
        </div>
        <form className="form form--search">
            <div className="form__field">
              <div className="form__icon">
                <input 
                  name="search"
                  type="text" 
                  placeholder='Busca una noticia' 
                  className="form__input" 
                />
                <i className='bx bx-search-alt-2 icon icon--search' ></i>
              </div>
            </div>
        </form>
      </div>
      <div className="header__second">
        <div className="flex flex-center header__photoBox">
          <i className='bx bxs-user header__photo'></i>
        </div>
        <div className="header__info">
          <p className="header__username">Saulo Román Santillan Nava</p>
          <p className="header__profession">Reportero</p>
        </div>
        <i ref={chevronDown} onClick={ onShowMenuActions } className='bx bxs-chevron-down header__icon'></i>
        <i ref={chevronUp} onClick={ onCloseMenuActions } className='bx bxs-chevron-up header__icon hidden'></i>
        <div ref={menuActions} className="header__actions">
          <div className="header__menu flex flex-center">
            <i className='bx bx-log-out icon icon--white'></i>
            <span>Cerrar Sesión</span>
          </div>
        </div>
      </div>
    </header>
  )
}
