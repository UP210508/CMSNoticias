/**
 * 
 * @param {String} page
 * @returns String 
 */

export const getCategoryNews = function( page = "" ) {

  let category = "";

  switch( page ) {
    case 'general':
      category = "todo";
      break;
  }

  return category
}