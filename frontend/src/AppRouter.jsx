import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './modules/auth/login/Login';
import { Register } from './modules/auth/register/Register';
import { NoticesPage } from './modules/cms/notices/notice-page/NoticesPage';
import { Profile } from './modules/cms/profile/Profile';
import { Stats } from './modules/cms/stats/Stats';
import { Settings } from './modules/cms/settings/Settings';
import { NewNotice } from './modules/cms/new-notice/NewNotice';
import { Notice } from './modules/cms/notice/Notice';
import { useAuth, useUI } from './modules/hooks';
import { OtherNotice } from './modules/cms';

export const AppRouter = () => {

  const { status, renewSession } = useAuth();
  const { showAlert } = useUI();

  useEffect(() => {
    renewSession();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {
          status === 'authenticated'
          ? (
            <>
              <Route path='/cms/noticias/:category' element={<NoticesPage />} />
              <Route path='/cms/noticias/noticia/:id' element={<Notice />} />
              <Route path='/cms/noticias/otras/noticia' element={<OtherNotice />} />
              <Route path='/cms/noticias/:category/nueva-noticia' element={<NewNotice />} />
              <Route path='/cms/perfil' element={<Profile />} />
              <Route path='/cms/estadisticas' element={<Stats />} />
              <Route path='/cms/configuracion' element={<Settings />} />
              <Route path='/*' element={<Navigate to="/cms/perfil" />} />
            </>
          )
          : (
            <>
              <Route path='login' element={<Login />} />
              <Route path='registrar' element={<Register />} />
              <Route path='/*' element={<Navigate to="/login" />} />
            </>
          )
        }
        <Route path='/*' element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}
