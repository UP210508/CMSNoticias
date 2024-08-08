import { useState } from 'react';
import { LayoutAuth } from '../layout/LayoutAuth';
import { useForm, useUI } from '../../hooks';
import { useAuth } from '../../hooks/useAuth';

const formData = {
  firstName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

const formValidations = {
  firstName: [ value => value.length > 1, "El nombre es obligatorio"],
  email: [ value => emailRegex.test( value ), "El email debe ser válido"],
  password: [ value => value.length >= 8, "Mínimo 8 caracteres"],
}

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { 
    firstName, 
    firstNameValid,
    email, 
    emailValid,
    password, 
    passwordValid,
    confirmPassword,
    confirmPasswordValid, 
    onInputChange, 
    onResetForm,
    isFormValid,
    formState,
  } = useForm( formData, {
    ...formValidations, 
    confirmPassword: [ value => value === password, 'Confirme su contraseña' ] } 
  );

  const { registerUser } = useAuth();
  const { showAlert } = useUI();

  const onRegisterUser = (e) => {
    e.preventDefault();
    setIsFormSubmitted( true );

    if ( !isFormValid ) return;

    console.log(formState);
    registerUser( formState );
    setIsFormSubmitted( false );
    onResetForm();
  }

  return (
    <LayoutAuth title="Comienza tu viaje">
      <form onSubmit={ onRegisterUser } className="form form--login">
        <div className="form__field">
          <label className="form__label">Nombre</label>
          <input
            name="firstName"
            value={firstName}
            onChange={ onInputChange }
            placeholder="Ingresa tu nombre"
            className="form__input"
            type="text"
          />
          <span
              className={`form__span ${
                !isFormValid && isFormSubmitted ? 'text-wrong' : null
              }`}
            >
            {firstNameValid}
          </span>
        </div>
        <div className="form__field">
          <label className="form__label">Email</label>
          <input
            name="email"
            value={email}
            onChange={ onInputChange }
            placeholder="Ingresa un correo válido"
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
              placeholder="Ingrese una contraseña"
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
        <div className="form__field">
          <label className="form__label">Confirma tu Contraseña</label>
          <div className="form__icon">
            <input
              name="confirmPassword"
              value={confirmPassword}
              onChange={ onInputChange }
              placeholder="Compruebe su contraseña"
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
            {confirmPasswordValid}
          </span>
        </div>
        <div className="form__button">
          <button type='submit' className="btn btn--blue">Ingresar</button>
        </div>
      </form>
    </LayoutAuth>
  );
};
