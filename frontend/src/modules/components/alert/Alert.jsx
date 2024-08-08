import { useEffect, useRef } from "react";
import { useUI } from "../../hooks";
import { getTypeAssets } from "../../helpers";

export const Alert = () => {
  const {
    closeAlert,
    alert: { isOpen, content, type },
  } = useUI();
  const alertRef = useRef();
  const { text, icon } = getTypeAssets( type );

  useEffect(() => {
    if (isOpen) {
      alertRef.current.classList.add("alert--show");
    } else {
      alertRef.current.classList.remove("alert--show");
    }
  }, [isOpen]);

  return (
    <div ref={alertRef} className="alert flex flex-column-center">
      <div className="alert__container flex flex-column-center">
        <i
          className={`bx bx-${icon}-circle icon icon--modal alert--${type}`}
        ></i>
        <h3 className={`alert__title alert--${type}}`}>{ text }</h3>
        <p className="alert__text">{content}</p>
        <button
          onClick={closeAlert}
          className={`btn btn--${type} alert__button`}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};
