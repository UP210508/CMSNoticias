import { useEffect, useRef } from "react";
import { useUI } from "../../hooks"

export const Alert = () => {

  const { closeAlert, alert: { isOpen } } = useUI();
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
        <div className="alert__top flex flex-between">
          <h3 className="alert__title alert--success">Titulo del Modal</h3>
          <i className='bx bx-check-circle icon icon--modal alert--success'></i>
        </div>
        <p className="alert__text">Do quis nulla adipisicing duis incididunt velit sunt pariatur.</p>
        <button onClick={ closeAlert } className="btn btn--success alert__button">Aceptar</button>
      </div>
    </div>
  )
}
