import { useEffect, useRef } from "react";
import { useUI } from "../../hooks"

export const Alert = () => {

  const { closeAlert, alert: { isOpen, content, type } } = useUI();
  const alertRef = useRef();

  useEffect(() => {
    if ( isOpen ) {
      alertRef.current.classList.add('alert--show');
    } else {
      alertRef.current.classList.remove('alert--show');
    }
  }, [isOpen])

  return (
    <div ref={alertRef} className='alert flex flex-column-center'>
      <div className="alert__container flex flex-column-center">
          <i className={`bx bx-${type === 'success' ? 'check': 'x'}-circle icon icon--modal alert--success ${ type === 'success' ? 'alert--success': 'alert--error'}`}></i>
          <h3 className={`alert__title ${ type === 'success' ? 'alert--success': 'alert--error'}`}>
            Mensaje de { type === 'success' ? 'Exito': 'Error'}
          </h3>
        <p className="alert__text">{ content }</p>
        <button onClick={ closeAlert } className={`btn btn--${ type === 'success' ? 'success' : 'error'} alert__button`}>Aceptar</button>
      </div>
    </div>
  )
}
