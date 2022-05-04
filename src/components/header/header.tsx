import React from 'react';
import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';
import contextState from '../../context/store/context.state';

export const Header: React.FC = observer(() => {
  const { isAuth, isAdmin } = contextState;

  if (!isAuth) {
    return null;
  }

  return (
    <div>
      {isAdmin && (
        <>
          <NavLink to="roles">Roles</NavLink>
          <NavLink to="reports">Reports</NavLink>
        </>
      )}
      <NavLink to="reports-panel">Report panel</NavLink>
    </div>
  );
});
