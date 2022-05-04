import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { contextState } from './context';
import { authState, LoginPage } from './libs/auth';
import { ReportsPage } from './libs/report';
import { RolesPage } from './libs/role';

export const App: React.FC = observer(() => {
  const { token, isAuth, isAdmin, loaded } = contextState;

  useEffect(() => {
    if (token) {
      authState.refresh().finally(() => contextState.setLoaded());
    } else {
      contextState.setLoaded();
    }
  }, []);

  if (!loaded) {
    return <Header />;
  }

  const navigateTo = isAuth ? (isAdmin ? '/roles' : '/reports-panel') : '/login';

  return (
    <>
      <Header />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {isAuth && (
          <>
            {isAdmin && (
              <>
                <Route path="/roles" element={<RolesPage />} />
                <Route path="/reports" element={<ReportsPage />} />
              </>
            )}
            <Route path="/reports-panel" element={<ReportsPage />} />
          </>
        )}
        <Route path="*" element={<Navigate replace to={navigateTo} />} />
      </Routes>
    </>
  );
});
