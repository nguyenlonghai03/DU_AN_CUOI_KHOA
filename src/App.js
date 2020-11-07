import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import ChiTietPhim from './pages/ChiTietPhim/ChiTietPhim';
import TrangChu from './pages/TrangChu/TrangChu';
import { HomeTemplate } from './templates/HomeTemplate';
import './assets/css/main.css'


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
