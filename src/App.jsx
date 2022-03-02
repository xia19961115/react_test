/*
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-03-01 14:25:16
 * @LastEditTime: 2022-03-02 16:54:06
 */
// import './App.less';
import React from 'react'
import {Route,Routes, Navigate} from 'react-router-dom'
import Login from '@/pages/Login'
// import Found404 from "@/pages/Foud404"
import Main from './pages/Main';
// import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      
      {/* <SiderDemo /> */}
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        {/* <SiderDemo path='/home'/> */}
        <Route path='/main/*' element={<Main />}></Route>
        {/* <Route path='*' element={<Found404 />}></Route> */}
        <Route path='/' element={<Navigate  to='/login'/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
