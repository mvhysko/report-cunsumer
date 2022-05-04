import { apiClient, GetRoleDocument, GetRolesDocument, Role, RoleConnection } from '../../../api';

export class RolesService {
  public async getRoles(): Promise<Role[]> {
    const { data } = await apiClient.query<{ getRoles: RoleConnection }>({
      query: GetRolesDocument,
    });

    if (!data) {
      throw new Error('Failed to get role!');
    }

    return data.getRoles.edges.map(({ node }) => node);
  }

  public async getRole(id: string): Promise<Role> {
    const { data } = await apiClient.query<{ getRole: Role }, { id: string }>({
      query: GetRoleDocument,
      variables: { id }
    });

    if (!data) {
      throw new Error('Failed to get role!');
    }

    return data.getRole;
  }
}

export const rolesService = new RolesService();
