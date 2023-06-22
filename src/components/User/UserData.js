import React from 'react';
import { useUserAuth } from '../../context/UserAuthContext';


export default function UserData() {
    const { user } = useUserAuth();
    return (
      <div>My account: {user.email}</div>
    )
}
