import { useState } from 'react';
import { LayoutAuth } from '../layout/LayoutAuth';

export const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <LayoutAuth title='Bievenido'>
      <form className="form form--login">
        <div className="form__field">
          <label className="form__label">Email</label>
          <input
            placeholder="correo@correo.com"
            name="email"
            className="form__input"
            type="email"
          />
        </div>
        <div className="form__field">
          <label className="form__label">Contraseña</label>
          <div className="form__icon">
            <input
              placeholder="Ingrese su contraseña"
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
