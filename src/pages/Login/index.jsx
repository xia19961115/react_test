/*
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-03-02 11:00:03
 * @LastEditTime: 2022-03-02 18:38:10
 */
import React from "react";
// import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./index.less";
const Login =() => {
  const navigate = useNavigate();
  function goPage(val) {
    return () => {
      localStorage.setItem('roleList','1')
      navigate(val);
    };
  }
  React.useEffect(() =>{
    sessionStorage.clear()
  },[])
  return (
    <div className="login">
      <div className="login-center">
        <div></div>
      <Form
      name="normal_login"
      className="login-form"
      size={'large'}
      initialValues={{ remember: true }}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item style={{width:'100%',margin:'0 auto'}}>
        <Button type="primary" htmlType="submit" onClick={goPage("/home")} className="login-form-button">登录</Button>
      </Form.Item>
    </Form>
      </div>
    </div>
  );
}
export default Login
