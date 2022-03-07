/*
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-03-01 15:16:25
 * @LastEditTime: 2022-03-07 11:03:35
 */
import React from 'react'
import { Layout } from 'antd';
import './index.less'
import { useNavigate} from 'react-router-dom'
const { Header } = Layout;
export default function NavHead() {
  const navigate =useNavigate()
  const handleQuite = () => {
    localStorage.clear()
    sessionStorage.clear()
    navigate('/login')
  }
  return (
    <Header style={{ padding: 0 ,backgroundColor: "#fff"}}>
      <div className="head">
          <div className='head-btn' onClick={handleQuite}>
          你好,admin 退出
          </div>
      </div>
    </Header>
  )
}
