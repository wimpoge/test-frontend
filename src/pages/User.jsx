import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(res.data);
      } catch (error) {
        setError('Failed to fetch user data');
      }
    };

    fetchUser();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Detail</h2>
      <p><strong>Name:</strong> {user.name ? user.name : '-'}</p>
      <p><strong>Username:</strong> {user.username ? user.username : '-'}</p>
      <p><strong>Email:</strong> {user.email ? user.email : '-'}</p>
      <p><strong>City:</strong> {user.address && user.address.city ? user.address.city : '-'}</p>
      <p><strong>Website:</strong> {user.website ? user.website : '-'}</p>
      <p><strong>Phone:</strong> {user.phone ? user.phone : '-'}</p>
    </div>
  );
  
};

export default User;
