import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import Nav from './components/Nav';
import MainPage from './components/pages/MainPage';
import DetailPage from './components/pages/DetailPage';
import SearchPage from './components/pages/SearchPage';
import LoginPage from './components/pages/LoginPage';
import useResizeWidth from './hooks/useResizeWidth';


const DefaultLayout = () => {
  return (
    <>
      <Nav/>
     
      <Outlet/>
    </>
  )
}

function App() {

  return (
    
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="login" element={<LoginPage />} />
        <Route index element={<MainPage/>}/> 
        <Route path=":movieId" element={<DetailPage/>}/> 
        <Route path="search" element={<SearchPage/>}/> 
      </Route>
    </Routes>
  );
}

export default App;
