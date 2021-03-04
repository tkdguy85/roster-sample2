import React from 'react'
import './App.css';
import LoginButton from './components/loginButton'
import LogoutButton from './components/logoutButton'
import Profile from './components/profile';
import { useAuth0 } from '@auth0/auth0-react'

import RosterList from './components/rosterList'

function App() {
  const { isLoading } = useAuth0()

  if (isLoading) return <div>Loading...don't try to read all of this.</div>
  return (
    <div>
      <LoginButton />
      <LogoutButton />
      <Profile />
      <RosterList />     
    </div>
   
  );
}

export default App;
