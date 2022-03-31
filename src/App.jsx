import React from 'react';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/SettingsComponent/Settings';
import UsersContainer from './components/Users/UsersContainer';
import './App.css';
import FriendsContainer from './components/Friends/FriendsContainer';
import NavBarContainer from './components/NavBar/NavBarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import DialogsContainer from './components/Messages/DialogsContainer';

function App(props) {
  return (

  <div className='app-wrapper'>
    <HeaderContainer/>
    <NavBarContainer />
    <Routes>
      <Route path='/profile/*' element = {<ProfileContainer />} />
      <Route path='/messages/*' element = {<DialogsContainer />} />
      <Route path='/news' element = {<News />} />
      <Route path='/music' element = {<Music />} />
      <Route path='/settings' element = {<Settings />} /> 
      <Route path='/users' element = {<UsersContainer />} /> 
      <Route path='/friends' element = {<FriendsContainer />} /> 
      <Route path='/login' element = {<Login />} /> 
    </Routes>
  </div>
  );
}

export default App;
