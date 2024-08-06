import { createSlice } from '@reduxjs/toolkit';

const fakeData =[
  {
    id: 1,
    title: 'Titulo de Noticia',
    body: 'Deserunt nisi velit et anim quis ipsum eiusmod fugiat id do. Nisi pariatur consequat adipisicing culpa do consequat voluptate voluptate. Ea commodo veniam aute cillum fugiat aliqua minim. Excepteur quis anim consequat consequat do dolor eiusmod aliquip. Pariatur laborum in ut irure esse nisi minim sunt adipisicing non. Nulla consectetur nisi consectetur anim culpa sit adipisicing commodo culpa amet incididunt elit in. Voluptate enim nostrud sint mollit quis est labore in ea.',
    author: 'Saulo Santillan',
    publishDate: new Intl.DateTimeFormat('es-MX').format( new Date() ),
    category: 'entretenimiento',
    img: 'https://www.elfinanciero.com.mx/resizer/_zzBYPUmBCzy-lE_l5uoQ1xnc-o=/600x338/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/7DKGRO4CTRFNBKULIQF75O6RR4.jpg',
  },
  {
    id: 2,
    title: 'Titulo de Noticia',
    body: 'Deserunt nisi velit et anim quis ipsum eiusmod fugiat id do. Nisi pariatur consequat adipisicing culpa do consequat voluptate voluptate. Ea commodo veniam aute cillum fugiat aliqua minim. Excepteur quis anim consequat consequat do dolor eiusmod aliquip. Pariatur laborum in ut irure esse nisi minim sunt adipisicing non. Nulla consectetur nisi consectetur anim culpa sit adipisicing commodo culpa amet incididunt elit in. Voluptate enim nostrud sint mollit quis est labore in ea.',
    author: 'Saulo Santillan',
    publishDate: new Intl.DateTimeFormat('es-MX').format( new Date() ),
    category: 'entretenimiento',
    img: 'https://pbs.twimg.com/media/GUQtCRtXoAA7Svn?format=jpg&name=large',
  },
  {
    id: 3,
    title: 'Titulo de Noticia',
    body: 'Deserunt nisi velit et anim quis ipsum eiusmod fugiat id do. Nisi pariatur consequat adipisicing culpa do consequat voluptate voluptate. Ea commodo veniam aute cillum fugiat aliqua minim. Excepteur quis anim consequat consequat do dolor eiusmod aliquip. Pariatur laborum in ut irure esse nisi minim sunt adipisicing non. Nulla consectetur nisi consectetur anim culpa sit adipisicing commodo culpa amet incididunt elit in. Voluptate enim nostrud sint mollit quis est labore in ea.',
    author: 'Saulo Santillan',
    publishDate: new Intl.DateTimeFormat('es-MX').format( new Date() ),
    category: 'entretenimiento',
    img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/27f06e24bbc8b9c7ee99dc38e9cb505eb5d64bc4-1920x1080.jpg?auto=format&fit=fill&q=80&w=956',
  },
  {
    id: 4,
    title: 'Titulo de Noticia',
    body: 'Deserunt nisi velit et anim quis ipsum eiusmod fugiat id do. Nisi pariatur consequat adipisicing culpa do consequat voluptate voluptate. Ea commodo veniam aute cillum fugiat aliqua minim. Excepteur quis anim consequat consequat do dolor eiusmod aliquip. Pariatur laborum in ut irure esse nisi minim sunt adipisicing non. Nulla consectetur nisi consectetur anim culpa sit adipisicing commodo culpa amet incididunt elit in. Voluptate enim nostrud sint mollit quis est labore in ea.',
    author: 'Saulo Santillan',
    publishDate: new Intl.DateTimeFormat('es-MX').format( new Date() ),
    category: 'entretenimiento',
    img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/27f06e24bbc8b9c7ee99dc38e9cb505eb5d64bc4-1920x1080.jpg?auto=format&fit=fill&q=80&w=956',
  },
  {
    id: 5,
    title: 'Titulo de Noticia',
    body: 'Deserunt nisi velit et anim quis ipsum eiusmod fugiat id do. Nisi pariatur consequat adipisicing culpa do consequat voluptate voluptate. Ea commodo veniam aute cillum fugiat aliqua minim. Excepteur quis anim consequat consequat do dolor eiusmod aliquip. Pariatur laborum in ut irure esse nisi minim sunt adipisicing non. Nulla consectetur nisi consectetur anim culpa sit adipisicing commodo culpa amet incididunt elit in. Voluptate enim nostrud sint mollit quis est labore in ea.',
    author: 'Saulo Santillan',
    publishDate: new Intl.DateTimeFormat('es-MX').format( new Date() ),
    category: 'entretenimiento',
    img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/27f06e24bbc8b9c7ee99dc38e9cb505eb5d64bc4-1920x1080.jpg?auto=format&fit=fill&q=80&w=956',
  },
  {
    id: 6,
    title: 'Titulo de Noticia',
    body: 'Deserunt nisi velit et anim quis ipsum eiusmod fugiat id do. Nisi pariatur consequat adipisicing culpa do consequat voluptate voluptate. Ea commodo veniam aute cillum fugiat aliqua minim. Excepteur quis anim consequat consequat do dolor eiusmod aliquip. Pariatur laborum in ut irure esse nisi minim sunt adipisicing non. Nulla consectetur nisi consectetur anim culpa sit adipisicing commodo culpa amet incididunt elit in. Voluptate enim nostrud sint mollit quis est labore in ea.',
    author: 'Saulo Santillan',
    publishDate: new Intl.DateTimeFormat('es-MX').format( new Date() ),
    category: 'entretenimiento',
    img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/27f06e24bbc8b9c7ee99dc38e9cb505eb5d64bc4-1920x1080.jpg?auto=format&fit=fill&q=80&w=956',
  },
  {
    id: 7,
    title: 'Titulo de Noticia',
    body: 'Deserunt nisi velit et anim quis ipsum eiusmod fugiat id do. Nisi pariatur consequat adipisicing culpa do consequat voluptate voluptate. Ea commodo veniam aute cillum fugiat aliqua minim. Excepteur quis anim consequat consequat do dolor eiusmod aliquip. Pariatur laborum in ut irure esse nisi minim sunt adipisicing non. Nulla consectetur nisi consectetur anim culpa sit adipisicing commodo culpa amet incididunt elit in. Voluptate enim nostrud sint mollit quis est labore in ea.',
    author: 'Saulo Santillan',
    publishDate: new Intl.DateTimeFormat('es-MX').format( new Date() ),
    category: 'entretenimiento',
    img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/27f06e24bbc8b9c7ee99dc38e9cb505eb5d64bc4-1920x1080.jpg?auto=format&fit=fill&q=80&w=956',
  },
  {
    id: 8,
    title: 'Titulo de Noticia',
    body: 'Deserunt nisi velit et anim quis ipsum eiusmod fugiat id do. Nisi pariatur consequat adipisicing culpa do consequat voluptate voluptate. Ea commodo veniam aute cillum fugiat aliqua minim. Excepteur quis anim consequat consequat do dolor eiusmod aliquip. Pariatur laborum in ut irure esse nisi minim sunt adipisicing non. Nulla consectetur nisi consectetur anim culpa sit adipisicing commodo culpa amet incididunt elit in. Voluptate enim nostrud sint mollit quis est labore in ea.',
    author: 'Saulo Santillan',
    publishDate: new Intl.DateTimeFormat('es-MX').format( new Date() ),
    category: 'entretenimiento',
    img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/27f06e24bbc8b9c7ee99dc38e9cb505eb5d64bc4-1920x1080.jpg?auto=format&fit=fill&q=80&w=956',
  },
  {
    id: 9,
    title: 'Titulo de Noticia',
    body: 'Deserunt nisi velit et anim quis ipsum eiusmod fugiat id do. Nisi pariatur consequat adipisicing culpa do consequat voluptate voluptate. Ea commodo veniam aute cillum fugiat aliqua minim. Excepteur quis anim consequat consequat do dolor eiusmod aliquip. Pariatur laborum in ut irure esse nisi minim sunt adipisicing non. Nulla consectetur nisi consectetur anim culpa sit adipisicing commodo culpa amet incididunt elit in. Voluptate enim nostrud sint mollit quis est labore in ea.',
    author: 'Saulo Santillan',
    publishDate: new Intl.DateTimeFormat('es-MX').format( new Date() ),
    category: 'entretenimiento',
    img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/27f06e24bbc8b9c7ee99dc38e9cb505eb5d64bc4-1920x1080.jpg?auto=format&fit=fill&q=80&w=956',
  },
  {
    id: 10,
    title: 'Titulo de Noticia',
    body: 'Deserunt nisi velit et anim quis ipsum eiusmod fugiat id do. Nisi pariatur consequat adipisicing culpa do consequat voluptate voluptate. Ea commodo veniam aute cillum fugiat aliqua minim. Excepteur quis anim consequat consequat do dolor eiusmod aliquip. Pariatur laborum in ut irure esse nisi minim sunt adipisicing non. Nulla consectetur nisi consectetur anim culpa sit adipisicing commodo culpa amet incididunt elit in. Voluptate enim nostrud sint mollit quis est labore in ea.',
    author: 'Saulo Santillan',
    publishDate: new Intl.DateTimeFormat('es-MX').format( new Date() ),
    category: 'entretenimiento',
    img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/27f06e24bbc8b9c7ee99dc38e9cb505eb5d64bc4-1920x1080.jpg?auto=format&fit=fill&q=80&w=956',
  },
]

export const noticesSlice = createSlice({
    name: 'notice',
    initialState: {
      notices: fakeData,
      selectedNotice: fakeData[0],
    },
    reducers: {
      setSelectedNotice: ( state, { payload } ) => {
        state.selectedNotice = payload;
      },
    }
})

export const { setSelectedNotice } = noticesSlice.actions;
