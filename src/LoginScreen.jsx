// LoginScreen.jsx

import React from 'react';
import { useDispatch } from 'react-redux';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Simulated login action - dispatching LOGIN action
    const user = { username: 'exampleUser', email: 'user@example.com' };
    dispatch({ type: 'LOGIN', payload: user });
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginScreen;
