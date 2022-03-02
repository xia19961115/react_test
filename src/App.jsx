/*
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-03-01 14:25:16
 * @LastEditTime: 2022-03-02 13:37:28
 */
// import './App.less';
import React from 'react'
import SiderDemo from '@/components/SilderBar/index.jsx'
function App() {
  React.useEffect(()=>{
    console.log('12311');
  },[])
  return (
    <div className="App">
      <SiderDemo />
    </div>
  );
}

export default App;
