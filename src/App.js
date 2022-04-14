import './App.scss';
import {BrowserRouter as Router, Link, Route, Routes, Navigate } from "react-router-dom";
import Page from './pages/Page';
import Title from './pages/Title';
import Home from './pages/Home';
import first from './tabs/first';
import second from './tabs/second';
import third from './tabs/third';
import React from 'react';

function App() {
  const [scroll, setScroll] = React.useState(0);
  const [navbar, setNavbar] = React.useState('btn btn-outline-primary m-2 border-2 rounded-3 w-50 shadow-lg');
  const [shouldRedirect, setShouldRedirect] = React.useState(true);

  return (
    <>
      <Router>
        <Home navbarState={navbar} first={first.data().tile} second={second.data().tile} third={third.data().tile}/>
        <Routes>
          <Route path="/page/1" element={<Page title={first.data().tile} photos={first.data().photos}
                                               mainText={first.data().mainText} next={first.data().next} previous={first.data().previous}/>}/>
          <Route path="/page/2" element={<Page title={second.data().tile} photos={second.data().photos}
                                               mainText={second.data().mainText} next={second.data().next} previous={second.data().previous}/>}/>
          <Route path="/page/3" element={<Page title={third.data().tile} photos={third.data().photos}
                                               mainText={third.data().mainText} next={third.data().next} previous={third.data().previous}/>}/>
          <Route path='/' element={<Title/>} />
          <Route path='/page/0' element={<Navigate replace to="/" />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
