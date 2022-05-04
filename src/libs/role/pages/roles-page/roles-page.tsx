import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useSearchParams } from 'react-router-dom';
import { rolesState } from '../../store';
import { RolesList, RoleDetails } from '../../components';
import { Button, Search } from '../../../../components';

export const RolesPage: FC = observer(() => {
  const { loading, roles } = rolesState;
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedRole = searchParams.get('selectedRole');

  useEffect(() => {
    rolesState.loadRoles();
  }, []);

  const openDetails = (roleId: string) => {
    setSearchParams({ selectedRole: roleId });
  };

  const closeDetails = () => {
    setSearchParams({});
  };

  console.log('ROLE PAGE RENDER');

  return (
    <div>

      <div>
        <Search value='' placeholder='Search user role' />
        <Button>Add new role</Button>
      </div>

      <div>
        {
          loading ?
          <h1>Loading...</h1> :
          <RolesList
            roles={roles}
            openDetails={openDetails}
          /> }

        { selectedRole && <RoleDetails roleId={selectedRole} close={closeDetails} /> }
      </div>

    </div>
  )
});
