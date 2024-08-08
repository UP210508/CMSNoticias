/**
 * 
 * @param {Number} length 
 * @returns {Array<Number>}
 */

export const createArray = ( length = 0 ) => {
  const arr = new Array( length );

  for( let i = 1; i <= length; i++ ) {
    arr.push( i );
  }

  return arr;
}