//components/UserList.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../actions/actions.js';
import '../components/UserList.css';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="user-container">
      <h2>User List</h2>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">Error: {error}</p>}
      <ul>
  {users.map((user, idx) => (
    <li key={idx}>
      {user.name.title} {user.name.first} {user.name.last}
    </li>
  ))}
</ul>

    </div>
  );
};

export default UserList;
