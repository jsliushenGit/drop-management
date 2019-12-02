import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouteView from './views/RouteView'
import MenuLeft from './views/MenuLeft'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="menu-left">
          <MenuLeft></MenuLeft>
        </div>

        <div className="route-view">
          <RouteView className='router-view'></RouteView>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
