/*
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-03-01 14:25:16
 * @LastEditTime: 2022-03-03 20:38:29
 */
import './App.less';
import React, {lazy, Suspense} from 'react';
import {Route,Routes, Navigate} from 'react-router-dom'
const Login = lazy(() => import('./pages/Login'));
const Found404 = lazy(() => import('./pages/Foud404'));
const Main = lazy(() => import('./pages/Main'));
function App() {
  return (
    <div className="App">
      {/* 路由懒加载 */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/main/*' element={<Main />}></Route>
          <Route path='/404' element={<Found404 />}></Route>
          <Route path='*' element={<Found404 />}></Route>
          <Route path='/' element={<Navigate  to='/main/welcome'/>}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
