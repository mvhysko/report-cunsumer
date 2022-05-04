import { makeAutoObservable } from 'mobx';
import { User } from '../../api';

export class ContextState {
  public static readonly TOKEN_STORAGE_KEY = 'token';

  private _token: string | null = window.localStorage.getItem(ContextState.TOKEN_STORAGE_KEY);
  private _user: User | null = null;
  private _loaded: boolean = false;

  get token(): string | null {
    return this._token;
  }

  get user(): User | null {
    return this._user;
  }

  get loaded(): boolean {
    return this._loaded;
  }

  get isAdmin(): boolean {
    return this._user?.isAdmin || false;
  }

  get isAuth(): boolean {
    return !!this._user;
  }

  constructor() {
    makeAutoObservable(this);
  }

  public setToken(token: string | null): void {
    this._token = token;

    if (token) {
      localStorage.setItem(ContextState.TOKEN_STORAGE_KEY, token);
    } else {
      localStorage.removeItem(ContextState.TOKEN_STORAGE_KEY);
    }
  }

  public setUser(user: User | null): void {
    this._user = user;
  }

  public setLoaded(): void {
    this._loaded = true;
  }
}

export const contextState = new ContextState();
export default contextState;
