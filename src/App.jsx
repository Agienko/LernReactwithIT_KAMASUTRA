import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dialogs from './components/Messages/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/SettingsComponent/Settings';
import UsersContainer from './components/Users/UsersContainer';
import './App.css';
import FriendsContainer from './components/Friends/FriendsContainer';
import NavBarContainer from './components/NavBar/NavBarContainer';

function App(props) {
  return (

  <div className='app-wrapper'>
    <Header />
    <NavBarContainer />
    <Routes>
      <Route path='/profile' element = {<Profile />} />
      <Route path='/messages/*' element = {<Dialogs />} />
      <Route path='/news' element = {<News />} />
      <Route path='/music' element = {<Music />} />
      <Route path='/settings' element = {<Settings />} /> 
      <Route path='/users' element = {<UsersContainer />} /> 
      <Route path='/friends' element = {<FriendsContainer />} /> 
    </Routes>
  </div>
  );
}

export default App;
