import { MenuSection } from './MenuSection';

const section1 = [
  {
    icon: 'bx-info-circle',
    link: 'General',
    path: '/cms/pefil',
  },
  {
    icon: 'bx-tv',
    link: 'Entretenimiento',
    path: '/cms/estadisticas',
  },
  {
    icon: 'bx-microphone',
    link: 'Política',
    path: '/cms/configuracion'
  },
  {
    icon: 'bx-cloud-rain',
    link: 'Clima',
    path: '/cms/clima'
  },
  {
    icon: 'bx-tennis-ball',
    link: 'Deportes',
    path: '/cms/deportes'
  },
  {
    icon: 'bx-flag',
    link: 'Nacionales',
    path: '/cms/nacionales'
  },
  {
    icon: 'bx-world',
    link: 'Internacionales',
    path: '/cms/internacionales'
  },
]

const section2 = [
  {
    icon: 'bx-user',
    link: 'Perfil',
    path: '/cms/pefil'
  },
  {
    icon: 'bx-stats',
    link: 'Estadísticas',
    path: '/cms/estadisticas'
  },
  {
    icon: 'bx-cog',
    link: 'Configuración',
    path: '/cms/configuracion'
  },
]

export const Menu = () => {
  return (
    <aside className="menu">
      <div className="menu__container">
        <MenuSection title="Noticias" links={ section1 } />
        <MenuSection title="Sistema" links={ section2 } />
      </div>
    </aside>
  )
}
