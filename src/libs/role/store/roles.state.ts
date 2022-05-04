import { makeAutoObservable } from 'mobx';
import { Role } from '../../../api';
import { rolesService } from '../services';

export class RolesState {
  private _error?: Error;
  private _loading: boolean = false;
  private _roles: Role[] = [];

  get roles(): ReadonlyArray<Role> {
    return this._roles;
  }

  get loading(): boolean {
    return this._loading;
  }

  get error(): Error | undefined {
    return this._error;
  }

  constructor() {
    makeAutoObservable(this);
  }

  public async loadRoles(): Promise<void> {
    this.setLoading(true);
    this.setError();

    return rolesService.getRoles()
      .then(roles => this.setRoles(roles))
      .catch(err => this.setError(err))
      .finally(() => this.setLoading(false));
  }

  private setRoles(roles: Role[]): void {
    this._roles = roles;
  }

  private setLoading(loading: boolean): void {
    this._loading = loading;
  }

  private setError(error?: Error): void {
    this._error = error;

    if (error) {
      throw error;
    }
  }
}

export const rolesState = new RolesState();
export default rolesState;
