import React from 'react';
import './assets/css/main.css'
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ChiTietPhim from './pages/ChiTietPhim/ChiTietPhim';
import TrangChu from './pages/TrangChu/TrangChu';
import { HomeTemplate } from './templates/HomeTemplate';


function App() {
  return (
    <BrowserRouter>
      <Switch>

        <HomeTemplate exact path="/home" Component={TrangChu} />
        <HomeTemplate exact path="/chitietphim" Component={ChiTietPhim} />


        <HomeTemplate exact path="/" Component={TrangChu} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
