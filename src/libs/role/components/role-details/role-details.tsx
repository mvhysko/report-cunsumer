import { observer } from 'mobx-react-lite';
import { FC, useEffect } from 'react';
import { Button } from '../../../../components';
import { roleState } from '../../store';

export interface RoleDetailsProps {
  roleId: string;
  close: () => void;
}

export const RoleDetails: FC<RoleDetailsProps> = observer(({ roleId, close }) => {
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

      <div>
        {/* Related report list */}
      </div>

    </div>
  );
});
