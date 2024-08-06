import { ButtonAddNotice } from "../../components/button-add-notice/ButtonAddNotice"
import { LayoutCMS } from "../layout/LayoutCMS"
import { usePage } from "../../hooks"
import { NoticesList } from "./NoticesList";
import { NoticesSelected } from "./NoticesSelected";

const notices = [
  {
    id: 1,
    title: 'Titulo de Noticia',
    body: 'Deserunt nisi velit et anim quis ipsum eiusmod fugiat id do. Nisi pariatur consequat adipisicing culpa do consequat voluptate voluptate. Ea commodo veniam aute cillum fugiat aliqua minim. Excepteur quis anim consequat consequat do dolor eiusmod aliquip. Pariatur laborum in ut irure esse nisi minim sunt adipisicing non. Nulla consectetur nisi consectetur anim culpa sit adipisicing commodo culpa amet incididunt elit in. Voluptate enim nostrud sint mollit quis est labore in ea.',
    author: 'Saulo Santillan',
    publishDate: new Intl.DateTimeFormat('es-MX').format( new Date() ),
    img: 'https://www.elfinanciero.com.mx/resizer/_zzBYPUmBCzy-lE_l5uoQ1xnc-o=/600x338/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/7DKGRO4CTRFNBKULIQF75O6RR4.jpg',
  },
  {
    id: 2,
    title: 'Titulo de Noticia',
    body: 'Deserunt nisi velit et anim quis ipsum eiusmod fugiat id do. Nisi pariatur consequat adipisicing culpa do consequat voluptate voluptate. Ea commodo veniam aute cillum fugiat aliqua minim. Excepteur quis anim consequat consequat do dolor eiusmod aliquip. Pariatur laborum in ut irure esse nisi minim sunt adipisicing non. Nulla consectetur nisi consectetur anim culpa sit adipisicing commodo culpa amet incididunt elit in. Voluptate enim nostrud sint mollit quis est labore in ea.',
    author: 'Saulo Santillan',
    publishDate: new Intl.DateTimeFormat('es-MX').format( new Date() ),
    img: 'https://pbs.twimg.com/media/GUQtCRtXoAA7Svn?format=jpg&name=large',
  },
  {
    id: 3,
    title: 'Titulo de Noticia',
    body: 'Deserunt nisi velit et anim quis ipsum eiusmod fugiat id do. Nisi pariatur consequat adipisicing culpa do consequat voluptate voluptate. Ea commodo veniam aute cillum fugiat aliqua minim. Excepteur quis anim consequat consequat do dolor eiusmod aliquip. Pariatur laborum in ut irure esse nisi minim sunt adipisicing non. Nulla consectetur nisi consectetur anim culpa sit adipisicing commodo culpa amet incididunt elit in. Voluptate enim nostrud sint mollit quis est labore in ea.',
    author: 'Saulo Santillan',
    publishDate: new Intl.DateTimeFormat('es-MX').format( new Date() ),
    img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/27f06e24bbc8b9c7ee99dc38e9cb505eb5d64bc4-1920x1080.jpg?auto=format&fit=fill&q=80&w=956',
  },
  {
    id: 4,
    title: 'Titulo de Noticia',
    body: 'Deserunt nisi velit et anim quis ipsum eiusmod fugiat id do. Nisi pariatur consequat adipisicing culpa do consequat voluptate voluptate. Ea commodo veniam aute cillum fugiat aliqua minim. Excepteur quis anim consequat consequat do dolor eiusmod aliquip. Pariatur laborum in ut irure esse nisi minim sunt adipisicing non. Nulla consectetur nisi consectetur anim culpa sit adipisicing commodo culpa amet incididunt elit in. Voluptate enim nostrud sint mollit quis est labore in ea.',
    author: 'Saulo Santillan',
    publishDate: new Intl.DateTimeFormat('es-MX').format( new Date() ),
    img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/27f06e24bbc8b9c7ee99dc38e9cb505eb5d64bc4-1920x1080.jpg?auto=format&fit=fill&q=80&w=956',
  },
  {
    id: 5,
    title: 'Titulo de Noticia',
    body: 'Deserunt nisi velit et anim quis ipsum eiusmod fugiat id do. Nisi pariatur consequat adipisicing culpa do consequat voluptate voluptate. Ea commodo veniam aute cillum fugiat aliqua minim. Excepteur quis anim consequat consequat do dolor eiusmod aliquip. Pariatur laborum in ut irure esse nisi minim sunt adipisicing non. Nulla consectetur nisi consectetur anim culpa sit adipisicing commodo culpa amet incididunt elit in. Voluptate enim nostrud sint mollit quis est labore in ea.',
    author: 'Saulo Santillan',
    publishDate: new Intl.DateTimeFormat('es-MX').format( new Date() ),
    img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/27f06e24bbc8b9c7ee99dc38e9cb505eb5d64bc4-1920x1080.jpg?auto=format&fit=fill&q=80&w=956',
  },
  {
    id: 5,
    title: 'Titulo de Noticia',
    body: 'Deserunt nisi velit et anim quis ipsum eiusmod fugiat id do. Nisi pariatur consequat adipisicing culpa do consequat voluptate voluptate. Ea commodo veniam aute cillum fugiat aliqua minim. Excepteur quis anim consequat consequat do dolor eiusmod aliquip. Pariatur laborum in ut irure esse nisi minim sunt adipisicing non. Nulla consectetur nisi consectetur anim culpa sit adipisicing commodo culpa amet incididunt elit in. Voluptate enim nostrud sint mollit quis est labore in ea.',
    author: 'Saulo Santillan',
    publishDate: new Intl.DateTimeFormat('es-MX').format( new Date() ),
    img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/27f06e24bbc8b9c7ee99dc38e9cb505eb5d64bc4-1920x1080.jpg?auto=format&fit=fill&q=80&w=956',
  },
  {
    id: 5,
    title: 'Titulo de Noticia',
    body: 'Deserunt nisi velit et anim quis ipsum eiusmod fugiat id do. Nisi pariatur consequat adipisicing culpa do consequat voluptate voluptate. Ea commodo veniam aute cillum fugiat aliqua minim. Excepteur quis anim consequat consequat do dolor eiusmod aliquip. Pariatur laborum in ut irure esse nisi minim sunt adipisicing non. Nulla consectetur nisi consectetur anim culpa sit adipisicing commodo culpa amet incididunt elit in. Voluptate enim nostrud sint mollit quis est labore in ea.',
    author: 'Saulo Santillan',
    publishDate: new Intl.DateTimeFormat('es-MX').format( new Date() ),
    img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/27f06e24bbc8b9c7ee99dc38e9cb505eb5d64bc4-1920x1080.jpg?auto=format&fit=fill&q=80&w=956',
  },
  {
    id: 5,
    title: 'Titulo de Noticia',
    body: 'Deserunt nisi velit et anim quis ipsum eiusmod fugiat id do. Nisi pariatur consequat adipisicing culpa do consequat voluptate voluptate. Ea commodo veniam aute cillum fugiat aliqua minim. Excepteur quis anim consequat consequat do dolor eiusmod aliquip. Pariatur laborum in ut irure esse nisi minim sunt adipisicing non. Nulla consectetur nisi consectetur anim culpa sit adipisicing commodo culpa amet incididunt elit in. Voluptate enim nostrud sint mollit quis est labore in ea.',
    author: 'Saulo Santillan',
    publishDate: new Intl.DateTimeFormat('es-MX').format( new Date() ),
    img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/27f06e24bbc8b9c7ee99dc38e9cb505eb5d64bc4-1920x1080.jpg?auto=format&fit=fill&q=80&w=956',
  },
  {
    id: 5,
    title: 'Titulo de Noticia',
    body: 'Deserunt nisi velit et anim quis ipsum eiusmod fugiat id do. Nisi pariatur consequat adipisicing culpa do consequat voluptate voluptate. Ea commodo veniam aute cillum fugiat aliqua minim. Excepteur quis anim consequat consequat do dolor eiusmod aliquip. Pariatur laborum in ut irure esse nisi minim sunt adipisicing non. Nulla consectetur nisi consectetur anim culpa sit adipisicing commodo culpa amet incididunt elit in. Voluptate enim nostrud sint mollit quis est labore in ea.',
    author: 'Saulo Santillan',
    publishDate: new Intl.DateTimeFormat('es-MX').format( new Date() ),
    img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/27f06e24bbc8b9c7ee99dc38e9cb505eb5d64bc4-1920x1080.jpg?auto=format&fit=fill&q=80&w=956',
  },
  {
    id: 5,
    title: 'Titulo de Noticia',
    body: 'Deserunt nisi velit et anim quis ipsum eiusmod fugiat id do. Nisi pariatur consequat adipisicing culpa do consequat voluptate voluptate. Ea commodo veniam aute cillum fugiat aliqua minim. Excepteur quis anim consequat consequat do dolor eiusmod aliquip. Pariatur laborum in ut irure esse nisi minim sunt adipisicing non. Nulla consectetur nisi consectetur anim culpa sit adipisicing commodo culpa amet incididunt elit in. Voluptate enim nostrud sint mollit quis est labore in ea.',
    author: 'Saulo Santillan',
    publishDate: new Intl.DateTimeFormat('es-MX').format( new Date() ),
    img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/27f06e24bbc8b9c7ee99dc38e9cb505eb5d64bc4-1920x1080.jpg?auto=format&fit=fill&q=80&w=956',
  },
]

export const NoticesPage = () => {

  const { getPageName } = usePage();
  const pageName = getPageName();

  return (
    <LayoutCMS className="notices">

      <header className="notices___header flex flex-between">
        <div className="notices__header-first">  
          <p className="notices__nav">CMS / Noticias / { pageName }</p>
          <p className="notices__title">Noticias { pageName }</p>
        </div> 
        <div className="notices__header-stats">
          <p className="notices__cat">Última creación: <span>10 de Agosto de 2025</span></p>
          <p className="notices__cat">Noticias creadas: <span>10</span></p>
        </div>
      </header>

      <div className="notices__content">
        <div className="notices__notices">
          <NoticesList notices={ notices } />
        </div>
        <NoticesSelected />
      </div>

      <ButtonAddNotice />
    </LayoutCMS>
  )
}
