import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { PrivatRoute } from 'components/PrivatRoute';
import { PublicRoute } from 'components/PublicRoute';

import AppView from 'view/AppView';
import HomeView from 'view/HomeView';
import LoginView from 'view/LoginView';
import RegisterView from 'view/RegisterView';
import ContactsView from 'view/ContactsView';

import { useCurrentUserQuery } from 'Redux/authApi';
import { selectToken } from 'Redux/authSlice';

import { CssBaseline } from '@mui/material';

export const App = () => {
  const token = useSelector(selectToken);

  useCurrentUserQuery(undefined, { skip: !token });

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<AppView />}>
          <Route
            index
            element={
              <PublicRoute>
                <HomeView />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivatRoute>
                <ContactsView />
              </PrivatRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <LoginView />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <RegisterView />
              </PublicRoute>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
