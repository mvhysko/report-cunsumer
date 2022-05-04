import {
  apiClient,
  LoginDocument,
  LogoutDocument,
  MeDocument,
  OperationStatus,
  TokenDocument,
  TokenResponse,
  User
} from '../../../api';

export interface Credentials {
  username: string;
  password: string;
}

export class AuthService {
  public async login(input: Credentials): Promise<TokenResponse> {
    const { data } = await apiClient.mutate<{ login: TokenResponse }, { input: Credentials }>({
      mutation: LoginDocument,
      variables: {
        input
      }
    });

    if (!data) {
      throw new Error('Login failed!');
    }

    return data.login;
  }

  public async logout(): Promise<void> {
    apiClient.mutate<{ logout: OperationStatus }>({
      mutation: LogoutDocument
    });
  }

  public async token(): Promise<TokenResponse> {
    const { data } = await apiClient.mutate<{ refreshToken: TokenResponse }>({
      mutation: TokenDocument
    });

    if (!data) {
      throw new Error('Failed to refresh token!');
    }

    return data.refreshToken;
  }

  public async me(): Promise<User> {
    const { data } = await apiClient.query<{ me: User }>({
      query: MeDocument
    });

    if (!data) {
      throw new Error('Failed to get current user!');
    }

    return data.me;
  }
}

export const authService = new AuthService();
export default authService;
