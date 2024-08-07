import { useState } from 'react';
import { LayoutAuth } from '../layout/LayoutAuth';
import { useForm } from '../../hooks';
import { useAuth } from '../../hooks/useAuth';

const formData = {
  email: "",
  password: "",
}

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

const formValidations = {
  email: [ value => emailRegex.test( value ), "El email es obligatorio"],
  password: [ value => value.length > 1, "La contraseña es obligatoria"]
}

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const {
    email,
    emailValid,
    password,
    passwordValid,
    onInputChange,
    onResetForm,
    isFormValid,
    formState
  } = useForm(formData, formValidations);
  const { loginUser } = useAuth();

  const onLoginUser = (e) => {
    e.preventDefault();
    setIsFormSubmitted( true );

    if ( !isFormValid ) return;

    loginUser( formState );
    setIsFormSubmitted( false );
  }

  return (
    <LayoutAuth title='Bievenido'>
      <form onSubmit={ onLoginUser } className="form form--login">
        <div className="form__field">
          <label className="form__label">Email</label>
          <input
            name="email"
            value={email}
            onChange={ onInputChange }
            placeholder="correo@correo.com"
            className="form__input"
            type="email"
          />
          <span
              className={`form__span ${
                !isFormValid && isFormSubmitted ? 'text-wrong' : null
              }`}
            >
            {emailValid}
          </span>
        </div>
        <div className="form__field">
          <label className="form__label">Contraseña</label>
          <div className="form__icon">
            <input
              name="password"
              value={password}
              onChange={ onInputChange }
              placeholder="Ingrese su contraseña"
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
          <span
              className={`form__span ${
                !isFormValid && isFormSubmitted ? 'text-wrong' : null
              }`}
            >
            {passwordValid}
          </span>
        </div>
        <div className="form__button">
          <button className="btn btn--blue">Ingresar</button>
        </div>
      </form>
    </LayoutAuth>
  );
};
