export const formatAuthor = ( authors = [] ) => {

  if ( !authors.length ) return 'Sin author';
  
  let authorsString = '';

  for( let i = 0; i < authors.length; i++ ) {
    authorsString += `${authors[i].name}${ i !== ( authors.length - 1) ? '-' : '' }`; 
  }

  return authorsString;

}