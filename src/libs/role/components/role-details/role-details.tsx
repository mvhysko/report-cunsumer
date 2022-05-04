import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Button } from '../../../../components';
import { roleState } from '../../store';

export interface RoleDetailsProps {
  roleId: string;
  close: () => void;
}

export const RoleDetails: React.FC<RoleDetailsProps> = observer(({ roleId, close }): React.ReactElement => {
  const { loading, role } = roleState;

  useEffect(() => {
    roleState.loadRole(roleId);
  }, [roleId]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div>
        <div>
          <h1>{role?.name}</h1>
        </div>
        <div>
          <div>...</div>
          <Button onClick={() => close()}>X</Button>
        </div>
      </div>

      <div>{/* Related report list */}</div>
    </div>
  );
});
