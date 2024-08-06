import logoWhite from '../../../assets/img/logo-white.png';

export const Header = () => {
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
      </div>
    </header>
  )
}
