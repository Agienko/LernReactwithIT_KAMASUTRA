import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dialogs from './components/Messages/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/SettingsComponent/Settings';
import UsersContainer from './components/Users/UsersContainer';
import './App.css';
import FriendsContainer from './components/Friends/FriendsContainer';

function App(props) {
  return (

  <div className='app-wrapper'>
    <Header />
    <NavBar navBarData={props.store.getState().navBarPage.navBarData}/>
    <Routes>
      <Route path='/profile' element = {<Profile store = {props.store}/>} />
      <Route path='/messages/*' element = {<Dialogs store = {props.store}/>} />
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
