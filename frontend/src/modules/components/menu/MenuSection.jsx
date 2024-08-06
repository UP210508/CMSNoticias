import { useRef } from 'react';
import { NavLink } from 'react-router-dom';

export const MenuSection = ({ title, links }) => {
  const chevronUp = useRef();
  const chevronDown = useRef();
  const bodyRef = useRef();

  const onOpenSection = () => {
    bodyRef.current.classList.remove('hidden');
    chevronUp.current.classList.remove('hidden');
    chevronDown.current.classList.add('hidden');
  };

  const onCloseSection = () => {
    bodyRef.current.classList.add('hidden');
    chevronUp.current.classList.add('hidden');
    chevronDown.current.classList.remove('hidden');
  };

  return (
    <section className="menu__section">
      <header className="menu__header flex flex-between">
        <p className="menu__header-name">{title}</p>
        <div className="menu__header-line"></div>
        <i
          ref={chevronDown}
          onClick={onOpenSection}
          className="bx bxs-chevron-down menu__header-icon hidden"
        ></i>
        <i
          ref={chevronUp}
          onClick={onCloseSection}
          className="bx bxs-chevron-up menu__header-icon"
        ></i>
      </header>
      <nav ref={bodyRef} className="menu__nav">
        <ul className="menu__list flex flex-column">
          {links.map((link) => (
            <NavLink to={link.path} className={`menu__link`}>
              <i className={`bx ${link.icon} menu__icon`}></i>
              {link.link}
            </NavLink>
          ))}
        </ul>
      </nav>
    </section>
  );
};
