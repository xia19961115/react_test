import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.less";
const Login =() => {
  const navigate = useNavigate();
  function goPage(val) {
    return () => {
      navigate(val);
    };
  }
  React.useEffect(() =>{
    sessionStorage.clear()
  },[])
  return (
    <div className="login">
      <div className="login-center">
        <Button onClick={goPage("/home")} type="primary">
          按钮
        </Button>
      </div>
    </div>
  );
}
export default Login
