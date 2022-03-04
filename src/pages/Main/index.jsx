/*
 * @Description:
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-03-03 10:49:27
 * @LastEditTime: 2022-03-04 14:45:45
 */
import React from "react";
import SilderBar from "@/components/SilderBar";
import routes from "@/routes/index.js";
import { useNavigate } from "react-router-dom";
export default function Main() {
  const navigate = useNavigate();
  const [Base,setBase] = React.useState([])
  const [arr,setArr] = React.useState([])
  React.useEffect(()=>{
    console.log('1231111')
    // 进入权限路由先获取用户权限ID
    const roleList = localStorage.getItem("roleList");
    // 没权限直接进登录页
    if (!roleList) navigate("/login");
    // 获取动态路由列表
    let route =routes.filter((item) => roleList?.includes(item.roleId) || item.roleId === '*')
    setBase([...Base, ...route])
    // 获取所有页面的路径
    let pathname = route.map((item) => "/main/" + item.path);
    setArr([...arr,...pathname])
    // eslint-disable-next-line
  },[])
  React.useEffect(() => {
    if (Base.length === 1) {
      navigate("/login");
    }
    // eslint-disable-next-line
  },[Base])
  return (
    <div>
      {/* 等获取到值的时候再去渲染组件 */}
      {/* <SilderBar roleRoute={Base} rolePath={arr} /> */}
      {
        Base && Base.length>1 && arr && arr.length >1 && <SilderBar roleRoute={Base} rolePath={arr}/>
      }
    </div>
  );
}
