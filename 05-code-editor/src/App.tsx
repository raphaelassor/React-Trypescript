import React from 'react';
import { CodeBox } from './cmps/CodeBox';
import { GuestList } from './cmps/GuestList';
import { Parent } from './cmps/Parent';
import logo from './logo.svg';


export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{ width: '500px', height: '500px' }} />
      </header>
      <Parent />
      <GuestList />
      <CodeBox />
    </div>
  );
}


