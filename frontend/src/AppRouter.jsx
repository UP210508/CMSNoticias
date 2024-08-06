import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './modules/auth/login/Login';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
