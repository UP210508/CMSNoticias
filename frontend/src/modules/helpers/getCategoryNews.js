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
    case 'entretenimiento':
      category = "entretenimiento"
      break;
    case 'politica':
      category = 'politica';
      break;
    case 'clima':
      category = 'clima';
      break;
    case 'deportes':
      category = 'deportes';
      break;
    case 'nacionales':
      category = 'México';
      break;
    case 'internacionales':
      category = 'mundo';
      break;
  }

  return category
}