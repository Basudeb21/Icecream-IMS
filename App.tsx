import React from 'react';
import Routes from './src/navs/nav-lists/Routes';
import AuthProvider from './src/screens/auth/login/AuthProvider'; // double-check this path

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;