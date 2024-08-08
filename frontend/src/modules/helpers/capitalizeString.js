/**
 * 
 * @param {String} str 
 * @returns { String }
 */

export const capitalizeString = ( str = '' ) => {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
