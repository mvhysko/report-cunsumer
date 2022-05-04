import { FC } from 'react';
import { Role, RoleFragment } from '../../../../api';
import { List } from '../../../../components';

export interface RolesListProps {
  roles: readonly Role[];
  openDetails: (id: string) => void;
}

export const RolesList: FC<RolesListProps> = ({ roles, openDetails }: RolesListProps) => {
  if (!roles.length) {
    return (
      <h1 style={{textAlign: 'center'}}>
        No roles!
      </h1>
    );
  }

  return (
    <List
      items={roles}
      renderItem={(role: RoleFragment) =>
        <div
          key={role.id}
          onClick={() => openDetails(role.id)}
          style={{padding: 15, border: '1px solid gray', cursor: 'pointer'}}
        >
          {role.name}
        </div>
      }
    />
  );
};
