import { createSlice } from '@reduxjs/toolkit';

const fakeData =[
  {
    id: 1,
    title: 'Titulo de Noticia',
    body: `Deserunt nisi velit et anim quis ipsum eiusmod fugiat id do. Nisi pariatur consequat adipisicing culpa do consequat voluptate voluptate. Ea commodo veniam aute cillum fugiat aliqua minim. Excepteur quis anim consequat consequat do dolor eiusmod aliquip. Pariatur laborum in ut irure esse nisi minim sunt adipisicing non.\nNulla consectetur nisi consectetur anim culpa sit adipisicing commodo culpa amet incididunt elit in. Voluptate enim nostrud sint mollit quis est labore in ea. Voluptate non Lorem ipsum consectetur pariatur eiusmod. Ipsum velit ipsum eiusmod velit cupidatat quis. Labore reprehenderit in proident consectetur Lorem elit mollit. Nisi nostrud ipsum incididunt et do officia et.`,
    author: 'Saulo Santillan',
    publishDate: new Intl.DateTimeFormat('es-MX').format( new Date() ),
    category: 'entretenimiento',
    img: 'https://www.elfinanciero.com.mx/resizer/_zzBYPUmBCzy-lE_l5uoQ1xnc-o=/600x338/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/7DKGRO4CTRFNBKULIQF75O6RR4.jpg',
  },
  {
    id: 2,
    title: 'Titulo de Noticia',
    body: 'Deserunt nisi velit et anim quis ipsum eiusmod fugiat id do. Nisi pariatur consequat adipisicing culpa do consequat voluptate voluptate. Ea commodo veniam aute cillum fugiat aliqua minim. Excepteur quis anim consequat consequat do dolor eiusmod aliquip. Pariatur laborum in ut irure esse nisi minim sunt adipisicing non. Nulla consectetur nisi consectetur anim culpa sit adipisicing commodo culpa amet incididunt elit in. Voluptate enim nostrud sint mollit quis est labore in ea. Officia incididunt officia veniam qui consectetur. Pariatur tempor non consequat ipsum esse duis laboris exercitation ut sunt laborum. Nulla aliquip qui eiusmod sit sunt irure voluptate cillum cillum occaecat consectetur. In ullamco magna exercitation est eu qui consequat sunt aliqua velit laborum. Veniam pariatur consequat officia ullamco dolore exercitation Lorem minim ea ut eiusmod sunt sit qui. Cillum cupidatat irure cillum est do fugiat. Do consequat nisi et aliquip eiusmod ipsum pariatur ex proident tempor reprehenderit esse.',
    author: 'Saulo Santillan',
    publishDate: new Intl.DateTimeFormat('es-MX').format( new Date() ),
    category: 'entretenimiento',
    img: 'https://pbs.twimg.com/media/GUQtCRtXoAA7Svn?format=jpg&name=large',
  },
  {
    id: 3,
    title: 'Titulo de Noticia',
    body: 'Deserunt nisi velit et anim quis ipsum eiusmod fugiat id do. Nisi pariatur consequat adipisicing culpa do consequat voluptate voluptate. Ea commodo veniam aute cillum fugiat aliqua minim. Excepteur quis anim consequat consequat do dolor eiusmod aliquip. Pariatur laborum in ut irure esse nisi minim sunt adipisicing non.Nulla consectetur nisi consectetur anim culpa sit adipisicing commodo culpa amet incididunt elit in. Voluptate enim nostrud sint mollit quis est labore in ea. Aute fugiat elit pariatur esse ullamco esse amet. Excepteur labore elit excepteur deserunt ipsum cupidatat deserunt est. Non eiusmod minim laboris ea non consectetur Lorem incididunt qui. Sint ea qui ullamco est dolore occaecat laborum cillum sint consequat exercitation culpa irure excepteur.',
    author: 'Saulo Santillan',
    publishDate: new Intl.DateTimeFormat('es-MX').format( new Date() ),
    category: 'entretenimiento',
    img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/27f06e24bbc8b9c7ee99dc38e9cb505eb5d64bc4-1920x1080.jpg?auto=format&fit=fill&q=80&w=956',
  },
  {
    id: 4,
    title: 'Titulo de Noticia',
    body: 'Deserunt nisi velit et anim quis ipsum eiusmod fugiat id do. Nisi pariatur consequat adipisicing culpa do consequat voluptate voluptate. Ea commodo veniam aute cillum fugiat aliqua minim. Excepteur quis anim consequat consequat do dolor eiusmod aliquip. Pariatur laborum in ut irure esse nisi minim sunt adipisicing non.Nulla consectetur nisi consectetur anim culpa sit adipisicing commodo culpa amet incididunt elit in. Voluptate enim nostrud sint mollit quis est labore in ea. Duis minim mollit culpa consectetur velit dolore consectetur eu. Excepteur nostrud occaecat excepteur ipsum adipisicing. Tempor ea eu consequat enim elit ullamco in ut velit enim mollit sit fugiat eiusmod. Quis consequat enim magna sunt officia. Ipsum dolore aliqua do non commodo consequat et magna consequat ipsum tempor. Qui Lorem deserunt exercitation excepteur eiusmod reprehenderit duis et cupidatat.',
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
      quantityOfPages: 4,
      currentPage: 1,
    },
    reducers: {
      setSelectedNotice: ( state, { payload } ) => {
        state.selectedNotice = payload;
      },

      setCurrentPage: ( state, { payload } ) => {
        state.currentPage = payload
      }
    }
})

export const { 
  setSelectedNotice ,
  setCurrentPage,
} = noticesSlice.actions;
