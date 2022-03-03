/*
 * @Description:
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-03-03 10:49:27
 * @LastEditTime: 2022-03-03 20:10:20
 */
import React from "react";
import SilderBar from "@/components/SilderBar";
import routes from "@/routes/index.js";
import { useNavigate } from "react-router-dom";
export default function Main() {
  const navigate = useNavigate();
  // 进入权限路由先获取用户权限ID
  const roleList = localStorage.getItem("roleList");
  // 没权限直接进登录页
  if (!roleList) navigate("/login");
  // 获取动态路由列表
  let Base = routes.filter((item) => roleList?.includes(item.roleId) || item.roleId === '*');
  // 无列表 直接跳登录
  // if (Base.length === 1) {
  //   navigate("/login");
  //   console.log(1231)
  // }
  // 获取所有页面的路径
  const arr = Base.map((item) => "/main/" + item.path);
  React.useEffect(()=>{
    if (Base.length === 1) {
      navigate("/login");
    }
    // eslint-disable-next-line
  },[])
  return (
    <div>
      <SilderBar roleRoute={Base} rolePath={arr} />
    </div>
  );
}
