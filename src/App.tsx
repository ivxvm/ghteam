import React from 'react';
import { LookupUser } from './features/users/components/LookupUser';
import { LoadedUsersList } from './features/users/components/LoadedUsersList';
import { RoleDropDown } from './features/users/components/RoleDropDown';
import { useAppDispatch, useAppSelector } from "./app/hooks";
import * as actions from "./features/users/actions";
import * as selectors from "./features/users/selectors";
import styles from "./App.module.css"

function App() {
  const dispatch = useAppDispatch();
  const lookupStatus = useAppSelector(selectors.lookupStatus);
  const loadedUsers = useAppSelector(selectors.loadedUsers);
  const handleLookupUser = (username: string) => {
    dispatch(actions.lookupUser({ username }));
  };
  const handleRemoveUser = (username: string) => {
    dispatch(actions.removeUser({ username }));
  };
  const handleRoleChange = (username: string, role: string) => {
    dispatch(actions.setUserRole({ username, role }));
  };
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        git team
      </header>
      <LookupUser
        lookupStatus={lookupStatus}
        loadedUsers={loadedUsers}
        onLookupUser={handleLookupUser}
      />
      <LoadedUsersList
        loadedUsers={loadedUsers}
        renderExtras={user =>
          <>
            <div className={styles.filler} />
            <RoleDropDown
              value={user.role}
              onChange={(role) => handleRoleChange(user.username, role)}
            />
          </>
        }
        onRemoveUser={handleRemoveUser}
      />
    </div>
  );
}

export default App;
