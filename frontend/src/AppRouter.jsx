import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './modules/auth/login/Login';
import { Register } from './modules/auth/register/Register';
import { NoticesPage } from './modules/cms/notices/NoticesPage';
import { Profile } from './modules/cms/profile/Profile';
import { Stats } from './modules/cms/stats/Stats';
import { Settings } from './modules/cms/settings/Settings';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='registrar' element={<Register />} />
        <Route path='/cms/noticias/:category' element={<NoticesPage />} />
        <Route path='/cms/perfil' element={<Profile />} />
        <Route path='/cms/estadisticas' element={<Stats />} />
        <Route path='/cms/configuracion' element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}
