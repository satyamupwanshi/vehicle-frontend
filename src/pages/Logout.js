import React, { useEffect } from 'react';

function Logout() {
  useEffect(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    alert('Logged out successfully');
    window.location.href = '/';
  }, []);

  return <p>Logging out...</p>;
}

export default Logout;