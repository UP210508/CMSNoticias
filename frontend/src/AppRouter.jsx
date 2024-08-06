import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './modules/auth/login/Login';
import { Register } from './modules/auth/register/Register';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='registrar' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}
