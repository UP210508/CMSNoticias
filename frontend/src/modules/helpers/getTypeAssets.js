/**
 * 
 * @param {Enumerator< success | error | info >} type 
 * @returns { Object }
 */

export const getTypeAssets = function( type = "" ) {

  const assets = {
    icon: '',
    text: ''
  }

  switch( type ){
    case 'success':
      assets.icon = 'check';
      assets.text = 'Éxito';
      break;
    case 'error':
      assets.icon = 'x';
      assets.text = 'Error';
      break;
    default:
      assets.icon = 'info';
      assets.text = 'Información';
      break;
  }

  return assets;
}