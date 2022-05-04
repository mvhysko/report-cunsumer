import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { authState } from '../../store';
import { Credentials } from '../../services';

export const LoginPage: React.FC = observer(() => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState<Credentials>({
    username: '',
    password: '',
  });
  const { loading, error } = authState;

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    authState.login(credentials).then(() => navigate('/'));
  }

  return (
    <div>
      <h1>Login</h1>

      {error ? <div>{error.message}</div> : ''}

      <form onSubmit={submit}>

        <div>
          <label>User name</label>
          <input
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value.trim() })}
            value={credentials.username}
            type="text"
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value.trim() })}
            value={credentials.password}
            type="password"
            required
          />
        </div>

        <div>
          <button disabled={loading} type='submit'>Login</button>
        </div>

      </form>
    </div>
  );
})
