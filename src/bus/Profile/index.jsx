import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { profileAsyncContacts } from './actions';

export const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profileAsyncContacts())
  }, [dispatch]);

  return (

    <div>
      profile
    </div>
  )
}
