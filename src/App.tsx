import React from 'react';
import Routes from './routes/index.routes';
import { AuthProvider } from './contexts/auth';


import './main.css';

function App() {

  return (
    <div id="root">
      <AuthProvider>
          <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
