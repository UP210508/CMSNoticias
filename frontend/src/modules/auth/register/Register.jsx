import { useState } from 'react';
import { LayoutAuth } from '../layout/LayoutAuth';

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <LayoutAuth title="Comienza tu viaje">
      <form className="form form--login">
        <div className="form__field">
          <label className="form__label">Nombre</label>
          <input
            placeholder="Ingresa tu nombre"
            name="email"
            className="form__input"
            type="email"
          />
        </div>
        <div className="form__field">
          <label className="form__label">Email</label>
          <input
            placeholder="Ingresa un correo válido"
            name="email"
            className="form__input"
            type="email"
          />
        </div>
        <div className="form__field">
          <label className="form__label">Contraseña</label>
          <div className="form__password">
            <input
              placeholder="Ingrese una contraseña"
              name="password"
              className="form__input"
              type={showPassword ? 'text' : 'password'}
            />
            <i
              onClick={() => setShowPassword(!showPassword)}
              className={`bx bx-${
                showPassword ? 'hide' : 'show'
              } icon icon--blue login__icon`}
            ></i>
          </div>
        </div>
        <div className="form__field">
          <label className="form__label">Confirma tu Contraseña</label>
          <div className="form__password">
            <input
              placeholder="Ingrese una contraseña"
              name="password"
              className="form__input"
              type={showPassword ? 'text' : 'password'}
            />
            <i
              onClick={() => setShowPassword(!showPassword)}
              className={`bx bx-${
                showPassword ? 'hide' : 'show'
              } icon icon--blue login__icon`}
            ></i>
          </div>
        </div>
        <div className="form__button">
          <button className="btn btn--blue">Ingresar</button>
        </div>
      </form>
    </LayoutAuth>
  );
};
