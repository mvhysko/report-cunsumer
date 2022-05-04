import { makeAutoObservable } from 'mobx';
import { contextState } from '../../../context';
import { Credentials, authService } from '../services';

export class AuthState {
  private _error?: Error;
  private _loading = false;

  get loading(): boolean {
    return this._loading;
  }

  get error(): Error | undefined {
    return this._error;
  }

  constructor() {
    makeAutoObservable(this);
  }

  public async login(credentials: Credentials): Promise<void> {
    this.setLoading(true);
    this.setError();

    return authService
      .login(credentials)
      .then((data) => contextState.setToken(data.accessToken))
      .then(() => authService.me())
      .then((user) => contextState.setUser(user))
      .catch((err) => {
        this.setError(err);
        throw err;
      })
      .finally(() => this.setLoading(false));
  }

  public async refresh(): Promise<void> {
    this.setLoading(true);
    this.setError();

    return authService
      .token()
      .then((data) => contextState.setToken(data.accessToken))
      .then(() => authService.me())
      .then((user) => contextState.setUser(user))
      .catch((err) => {
        this.setError(err);
        throw err;
      })
      .finally(() => this.setLoading(false));
  }

  public logout(): void {
    contextState.setToken(null);
    contextState.setUser(null);

    authService
      .logout()
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }

  private setLoading(loading: boolean): void {
    this._loading = loading;
  }

  private setError(error?: Error): void {
    this._error = error;
  }
}

export const authState = new AuthState();
export default authState;
