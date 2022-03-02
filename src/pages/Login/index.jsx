/*
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-03-02 11:00:03
 * @LastEditTime: 2022-03-02 20:13:39
 */
import React from "react";
// import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import {  message,Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./index.less";
const Login =() => {
  const navigate = useNavigate()
  // const [username,setusername] = React.useState('')
  // const [password,setpassword] = React.useState('')
  const [userLogin,setUserLogin] = React.useState({
    username: '',
    password: ''
  })
  function goPage(val) {
    return () => {
      if (userLogin.username==='' && userLogin.password=== '') {
        message.error('填写完整信息再提交')
        return
      }
      // console.log(userLogin);
      // localStorage.setItem('roleList','1')
      // navigate(val);
    };
  }
  React.useEffect(() =>{
    sessionStorage.clear()
  },[])
  const handleInputChange =(val) => {
    if (val.username==='' && val.password=== '') {
      message.error('填写完整信息再提交')
      return
    }
      localStorage.setItem('roleList','1')
      navigate('/main');
  }
  return (
    <div className="login">
      <div className="login-center">
        <div className="login-center-title">登录</div>
      <Form
      onFinish={handleInputChange}
      name="normal_login"
      className="login-form"
      size={'large'}
      initialValues={{ remember: true }}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input onChange={(e)=>setUserLogin({...userLogin,...{username:e.target.value}})} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input.Password
          onChange={(e)=>setUserLogin({...userLogin,...{password:e.target.value}})}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button style={{width:'100%',margin:'0 auto'}} type="primary" htmlType="submit" onClick={goPage("/home")} className="login-form-button">登录</Button>
      </Form.Item>
    </Form>
      </div>
    </div>
  );
}
export default Login
