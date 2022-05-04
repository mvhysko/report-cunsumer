import { makeAutoObservable } from 'mobx';
import { Role } from '../../../api';
import  { rolesService } from '../services';

export class RoleState {
  private _role?: Role;
  private _error?: Error;
  private _loading: boolean = false;

  get role(): Role | undefined {
    return this._role;
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

  public async loadRole(id: string): Promise<void> {
    this.setLoading(true);
    this.setError();

    return rolesService.getRole(id)
      .then(role => this.setRole(role))
      .catch(err => this.setError(err))
      .finally(() => this.setLoading(false));
  }

  private setRole(role: Role): void {
    this._role = role;
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

export const roleState = new RoleState();
export default roleState;
