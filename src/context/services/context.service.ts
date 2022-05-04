import { apiClient, MeDocument, User } from '../../api';

export class ContextService {
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

export const contextService = new ContextService();
export default contextService;
